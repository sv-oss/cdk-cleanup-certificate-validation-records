import * as acm from '@aws-sdk/client-acm';
import * as route53 from '@aws-sdk/client-route-53';
import { CdkCustomResourceEvent, CdkCustomResourceResponse, Handler } from 'aws-lambda';
// eslint-disable-next-line @typescript-eslint/no-require-imports
const retry = require('async-await-retry');

export interface CleanupCertificateValidationRecordsRequestProperties {
  readonly HostedZoneId: string;
  readonly CertificateArn: string;
}

export type CleanupCertificateValidationRecordsCustomResourceEvent = CdkCustomResourceEvent & {
  readonly ResourceProperties: CleanupCertificateValidationRecordsRequestProperties;
}

export const handler: Handler<CleanupCertificateValidationRecordsCustomResourceEvent, CdkCustomResourceResponse> = async (event, context) => {
  console.log('Received event', JSON.stringify(event, null, 4));
  console.log('Received context', JSON.stringify(context, null, 4));

  if (!event.ResourceProperties.HostedZoneId) {
    throw new Error('missing required resource property: HostedZoneId');
  }
  if (!event.ResourceProperties.CertificateArn) {
    throw new Error('missing required resource property: CertificateArn');
  }

  if (event.RequestType === 'Delete') {
    const acmClient = new acm.ACMClient();
    const route53Client = new route53.Route53Client();

    console.log(`retrieving certificate with arn ${event.ResourceProperties.CertificateArn}`);

    const response = await (acmClient.send(new acm.DescribeCertificateCommand({
      CertificateArn: event.ResourceProperties.CertificateArn,
    })));

    if (!response.Certificate || !response.Certificate.DomainValidationOptions) {
      console.log('received ambiguous response from api', JSON.stringify(response, null, 4));
      throw new Error('received ambiguous response from api');
    }

    // Collect all successful DNS validations for the certificate
    const dnsValidations = response.Certificate.DomainValidationOptions.filter(dvo => dvo.ValidationStatus == 'SUCCESS' && dvo.ValidationMethod == 'DNS' && dvo.ResourceRecord);

    // Collect all records for the validations
    const recordsToDelete = dnsValidations.map(v => v.ResourceRecord!.Name!);

    console.log(`deleting the following records from route53 hosted zone ${event.ResourceProperties.HostedZoneId}`, JSON.stringify(recordsToDelete, null, 4));


    const retriable = async () => {
      const getRecordsResponse = await route53Client.send(new route53.ListResourceRecordSetsCommand({
        HostedZoneId: event.ResourceProperties.HostedZoneId,
      }));
      const recordSetsForValidations = getRecordsResponse.ResourceRecordSets!.filter(rs => recordsToDelete.includes(rs.Name!));

      // Prepare a DNS change request to delete all the validation records
      const changes: route53.Change[] = recordSetsForValidations.map(r => ({
        Action: 'DELETE',
        ResourceRecordSet: {
          Name: r.Name,
          Type: r.Type,
          ResourceRecords: r.ResourceRecords,
          TTL: r.TTL,
        },
      }));

      if (changes.length > 0) {
        await (route53Client.send(new route53.ChangeResourceRecordSetsCommand({
          HostedZoneId: event.ResourceProperties.HostedZoneId,
          ChangeBatch: {
            Changes: changes,
          },
        })));
      }
    };

    try {
      await retry(retriable, undefined, { interval: 1000 });
    } catch (err) {
      console.error('The function execution failed!', err);
    }
  }

  return {
    PhysicalResourceId: `cleanup-${event.ResourceProperties.HostedZoneId}-${event.ResourceProperties.CertificateArn}`,
  };
};
