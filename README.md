# cdk-cleanup-certificate-validation-records

This CDK construct takes care of cleaning up the orphaned Route53 CNAME validation records
left behind when deleting a certificate that had DNS validation enabled.

The issue is better explained here: https://github.com/aws/aws-cdk/issues/11201

## Usage

### With wrapper class

The simplest usage is via the wrapper class `CertificateWithCleanup`.

The class extends the standard `Certificate` construct and adds the cleanup automatically

```typescript
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CertificateWithCleanup } from '@servicevic-oss/cdk-cleanup-certificate-validation-records'

export class TestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: TestStackProps) {
    super(scope, id, props);

    zone = new cdk.aws_route53.PublicHostedZone(this, 'Zone', {
      zoneName: 'my.zone.net',
    });

    const cert1 = new CertificateWithCleanup(this, 'Cert', {
      domainName: `mydomain.${zone.zoneName}`,
      validation: cdk.aws_certificatemanager.CertificateValidation.fromDns(zone),
      subjectAlternativeNames: [
        `mydomain2.${zone.zoneName}`,
        `mydomain3.${zone.zoneName}`,
      ],
    });
  };
}
```

### Explicit instantiation

The construct can be instantiated explicitely to cleanup after a specific certificate

```typescript
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CertificateValidationRecordCleanup } from '@servicevic-oss/cdk-cleanup-certificate-validation-records'

export class TestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: TestStackProps) {
    super(scope, id, props);

    zone = new cdk.aws_route53.PublicHostedZone(this, 'Zone', {
      zoneName: 'my.zone.net',
    });

    const cert1 = new cdk.aws_certificatemanager.Certificate(this, 'Cert', {
      domainName: `mydomain.${zone.zoneName}`,
      validation: cdk.aws_certificatemanager.CertificateValidation.fromDns(zone),
      subjectAlternativeNames: [
        `mydomain2.${zone.zoneName}`,
        `mydomain3.${zone.zoneName}`,
      ],
    });
    const cert2 = new cdk.aws_certificatemanager.Certificate(this, 'Cert', {
      domainName: `another.${zone.zoneName}`,
      validation: cdk.aws_certificatemanager.CertificateValidation.fromDns(zone),
    });

    new CertificateValidationRecordCleanup(this, `cleanup-${cert1.node.id}`, {
      certificate: cert1,
      hostedZone: zone,
    });

    new CertificateValidationRecordCleanup(this, `cleanup-${cert2.node.id}`, {
      certificate: cert2,
      hostedZone: zone,
    });
  };
}
```

### Implicit instantiation using Aspects with knowledge of the hosted zone

The construct can be instantiated automatically against any Certificate resource created within a stack
through the use of Aspects

In this example, we have knowledge of the hosted zone

```typescript
import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { CertificateValidationRecordCleanup } from '@servicevic-oss/cdk-cleanup-certificate-validation-records'

export class TestStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props: TestStackProps) {
    super(scope, id, props);

    zone = new cdk.aws_route53.PublicHostedZone(this, 'Zone', {
      zoneName: 'my.zone.net',
    });

    new cdk.aws_certificatemanager.Certificate(this, 'Cert', {
      domainName: `mydomain.${zone.zoneName}`,
      validation: cdk.aws_certificatemanager.CertificateValidation.fromDns(zone),
      subjectAlternativeNames: [
        `mydomain2.${zone.zoneName}`,
        `mydomain3.${zone.zoneName}`,
      ],
    });
    new cdk.aws_certificatemanager.Certificate(this, 'Cert', {
      domainName: `another.${zone.zoneName}`,
      validation: cdk.aws_certificatemanager.CertificateValidation.fromDns(zone),
    });

    cdk.Aspects.of(this).add({
      visit: (c) => {
        if (c instanceof cdk.aws_certificatemanager.Certificate) {
          new CertificateValidationRecordCleanup(this, `cleanup-${c.node.id}`, {
            certificate: c,
            hostedZone: zone,
          });
        }
      },
    });
  };
}
```

### Implicit instantiation using Aspects without knowledge of the hosted zone

The construct can be instantiated automatically against any Certificate resource created within a stack
through the use of Aspects

In this example, we have no knowledge of the hosted zone used to validate the certificate so we use a bit of brute force to derive it from the Certificate L1 resource

```typescript
import * as cdk from 'aws-cdk-lib';
import { CertificateValidationRecordCleanup } from '@servicevic-oss/cdk-cleanup-certificate-validation-records'

const app = new cdk.App();

const blackBoxStack = new BlackBoxStack(app, 'my-blackbox-stack');
  
cdk.Aspects.of(blackBoxStack).add({
  visit: (c) => {
    if (c instanceof cdk.aws_certificatemanager.Certificate) {
      const cfnRes = c.node.defaultChild as cdk.aws_certificatemanager.CfnCertificate;
      const valOpts = (cfnRes.domainValidationOptions as cdk.aws_certificatemanager.CfnCertificate.DomainValidationOptionProperty[])[0];

      new CertificateValidationRecordCleanup(c, `cleanup-${c.node.id}`, {
        certificate: c,
        hostedZone: cdk.aws_route53.HostedZone.fromHostedZoneId(c, `lookup-${c.node.id}`, valOpts.hostedZoneId!),
      });
    }
  },
});
```