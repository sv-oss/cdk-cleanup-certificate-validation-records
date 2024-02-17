import { join } from 'path';
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';

export interface CertificateValidationRecordCleanupProps {
  /**
   * The Route53 hosted zone where the certificate validation records have been created for a certificate
   */
  readonly hostedZone: cdk.aws_route53.IHostedZone;

  /**
   * The ACM certificate that created the validation records
   */
  readonly certificate: cdk.aws_certificatemanager.ICertificate;
}

/**
 * This constructs will take care of deleting the orphaned route53 records that ACM will
 * leave behind when deleting a DNS validated certificate
 */
export class CertificateValidationRecordCleanup extends Construct {
  static readonly HANDLER_UID = 'CertRecordsCleanupHandler-2B663BAB-7981';
  static readonly PROVIDER_UID = 'CertRecordsCleanupProvider-57EBF059-2E26';

  public readonly handlerFunction: cdk.aws_lambda_nodejs.NodejsFunction;
  public readonly provider: cdk.custom_resources.Provider;

  constructor(scope: Construct, id: string, props: CertificateValidationRecordCleanupProps) {
    super(scope, id);

    this.handlerFunction = this.getOrCreateFunction();
    this.provider = this.getOrCreateProvider();

    this.handlerFunction.role?.addToPrincipalPolicy(new cdk.aws_iam.PolicyStatement({
      actions: ['acm:DescribeCertificate'],
      resources: [props.certificate.certificateArn],
    }));
    this.handlerFunction.role?.addToPrincipalPolicy(new cdk.aws_iam.PolicyStatement({
      actions: [
        'route53:ChangeResourceRecordSets',
        'route53:ListResourceRecordSets',
      ],
      resources: [props.hostedZone.hostedZoneArn],
    }));

    new cdk.CustomResource(this, 'Resource', {
      serviceToken: this.provider.serviceToken,
      resourceType: 'Custom::CertificateValidationRecordCleanup',
      properties: {
        HostedZoneId: props.hostedZone.hostedZoneId,
        CertificateArn: props.certificate.certificateArn,
      },
    });

    this.node.addDependency(props.certificate, props.hostedZone);
  }

  private getOrCreateFunction(): cdk.aws_lambda_nodejs.NodejsFunction {
    const id = CertificateValidationRecordCleanup.HANDLER_UID;
    const stack = cdk.Stack.of(this);
    return stack.node.tryFindChild(id) as cdk.aws_lambda_nodejs.NodejsFunction ?? new cdk.aws_lambda_nodejs.NodejsFunction(stack, id, {
      description: 'Handler function for the CertificateValidationRecordCleanup construct',
      entry: join(__dirname, 'cleanup-certificate-validation-records.handler.js'),
      logRetention: cdk.aws_logs.RetentionDays.ONE_WEEK,
      timeout: cdk.Duration.minutes(2),
    });
  }

  private getOrCreateProvider(): cdk.custom_resources.Provider {
    const id = CertificateValidationRecordCleanup.PROVIDER_UID;
    const stack = cdk.Stack.of(this);
    return stack.node.tryFindChild(id) as cdk.custom_resources.Provider ?? new cdk.custom_resources.Provider(stack, id, {
      onEventHandler: this.handlerFunction,
      logRetention: cdk.aws_logs.RetentionDays.ONE_WEEK,
    });
  }
}

/**
 * A wrapper class for a vanilla `Certificate` object with automatic cleanup attached
 */
export class CertificateWithCleanup extends cdk.aws_certificatemanager.Certificate {
  constructor(scope: Construct, id: string, props: cdk.aws_certificatemanager.CertificateProps) {
    super(scope, id, props);

    if (props.validation && props.validation.props.hostedZone && props.validation?.method == cdk.aws_certificatemanager.ValidationMethod.DNS) {
      // Attach a cleanup construct
      new CertificateValidationRecordCleanup(this, `cleanup-${id}`, {
        certificate: this,
        hostedZone: props.validation.props.hostedZone,
      });
    }
  }
}