# API Reference <a name="API Reference" id="api-reference"></a>

## Constructs <a name="Constructs" id="Constructs"></a>

### CertificateValidationRecordCleanup <a name="CertificateValidationRecordCleanup" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup"></a>

This constructs will take care of deleting the orphaned route53 records that ACM will leave behind when deleting a DNS validated certificate.

#### Initializers <a name="Initializers" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.Initializer"></a>

```typescript
import { CertificateValidationRecordCleanup } from '@servicevic-oss/cdk-cleanup-certificate-validation-records'

new CertificateValidationRecordCleanup(scope: Construct, id: string, props: CertificateValidationRecordCleanupProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.Initializer.parameter.props">props</a></code> | <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanupProps">CertificateValidationRecordCleanupProps</a></code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.Initializer.parameter.props"></a>

- *Type:* <a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanupProps">CertificateValidationRecordCleanupProps</a>

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.toString">toString</a></code> | Returns a string representation of this construct. |

---

##### `toString` <a name="toString" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.isConstruct"></a>

```typescript
import { CertificateValidationRecordCleanup } from '@servicevic-oss/cdk-cleanup-certificate-validation-records'

CertificateValidationRecordCleanup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.property.handlerFunction">handlerFunction</a></code> | <code>aws-cdk-lib.aws_lambda_nodejs.NodejsFunction</code> | *No description.* |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.property.provider">provider</a></code> | <code>aws-cdk-lib.custom_resources.Provider</code> | *No description.* |

---

##### `node`<sup>Required</sup> <a name="node" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `handlerFunction`<sup>Required</sup> <a name="handlerFunction" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.property.handlerFunction"></a>

```typescript
public readonly handlerFunction: NodejsFunction;
```

- *Type:* aws-cdk-lib.aws_lambda_nodejs.NodejsFunction

---

##### `provider`<sup>Required</sup> <a name="provider" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.property.provider"></a>

```typescript
public readonly provider: Provider;
```

- *Type:* aws-cdk-lib.custom_resources.Provider

---

#### Constants <a name="Constants" id="Constants"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.property.HANDLER_UID">HANDLER_UID</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.property.PROVIDER_UID">PROVIDER_UID</a></code> | <code>string</code> | *No description.* |

---

##### `HANDLER_UID`<sup>Required</sup> <a name="HANDLER_UID" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.property.HANDLER_UID"></a>

```typescript
public readonly HANDLER_UID: string;
```

- *Type:* string

---

##### `PROVIDER_UID`<sup>Required</sup> <a name="PROVIDER_UID" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanup.property.PROVIDER_UID"></a>

```typescript
public readonly PROVIDER_UID: string;
```

- *Type:* string

---

### CertificateWithCleanup <a name="CertificateWithCleanup" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup"></a>

A wrapper class for a vanilla `Certificate` object with automatic cleanup attached.

#### Initializers <a name="Initializers" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.Initializer"></a>

```typescript
import { CertificateWithCleanup } from '@servicevic-oss/cdk-cleanup-certificate-validation-records'

new CertificateWithCleanup(scope: Construct, id: string, props: CertificateProps)
```

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.Initializer.parameter.scope">scope</a></code> | <code>constructs.Construct</code> | *No description.* |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.Initializer.parameter.id">id</a></code> | <code>string</code> | *No description.* |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.Initializer.parameter.props">props</a></code> | <code>aws-cdk-lib.aws_certificatemanager.CertificateProps</code> | *No description.* |

---

##### `scope`<sup>Required</sup> <a name="scope" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.Initializer.parameter.scope"></a>

- *Type:* constructs.Construct

---

##### `id`<sup>Required</sup> <a name="id" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.Initializer.parameter.id"></a>

- *Type:* string

---

##### `props`<sup>Required</sup> <a name="props" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.Initializer.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_certificatemanager.CertificateProps

---

#### Methods <a name="Methods" id="Methods"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.toString">toString</a></code> | Returns a string representation of this construct. |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.applyRemovalPolicy">applyRemovalPolicy</a></code> | Apply the given removal policy to this resource. |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.metricDaysToExpiry">metricDaysToExpiry</a></code> | Return the DaysToExpiry metric for this AWS Certificate Manager Certificate. By default, this is the minimum value over 1 day. |

---

##### `toString` <a name="toString" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.toString"></a>

```typescript
public toString(): string
```

Returns a string representation of this construct.

##### `applyRemovalPolicy` <a name="applyRemovalPolicy" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.applyRemovalPolicy"></a>

```typescript
public applyRemovalPolicy(policy: RemovalPolicy): void
```

Apply the given removal policy to this resource.

The Removal Policy controls what happens to this resource when it stops
being managed by CloudFormation, either because you've removed it from the
CDK application or because you've made a change that requires the resource
to be replaced.

The resource can be deleted (`RemovalPolicy.DESTROY`), or left in your AWS
account for data recovery and cleanup later (`RemovalPolicy.RETAIN`).

###### `policy`<sup>Required</sup> <a name="policy" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.applyRemovalPolicy.parameter.policy"></a>

- *Type:* aws-cdk-lib.RemovalPolicy

---

##### `metricDaysToExpiry` <a name="metricDaysToExpiry" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.metricDaysToExpiry"></a>

```typescript
public metricDaysToExpiry(props?: MetricOptions): Metric
```

Return the DaysToExpiry metric for this AWS Certificate Manager Certificate. By default, this is the minimum value over 1 day.

This metric is no longer emitted once the certificate has effectively
expired, so alarms configured on this metric should probably treat missing
data as "breaching".

###### `props`<sup>Optional</sup> <a name="props" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.metricDaysToExpiry.parameter.props"></a>

- *Type:* aws-cdk-lib.aws_cloudwatch.MetricOptions

---

#### Static Functions <a name="Static Functions" id="Static Functions"></a>

| **Name** | **Description** |
| --- | --- |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.isConstruct">isConstruct</a></code> | Checks if `x` is a construct. |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.isOwnedResource">isOwnedResource</a></code> | Returns true if the construct was created by CDK, and false otherwise. |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.isResource">isResource</a></code> | Check whether the given construct is a Resource. |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.fromCertificateArn">fromCertificateArn</a></code> | Import a certificate. |

---

##### ~~`isConstruct`~~ <a name="isConstruct" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.isConstruct"></a>

```typescript
import { CertificateWithCleanup } from '@servicevic-oss/cdk-cleanup-certificate-validation-records'

CertificateWithCleanup.isConstruct(x: any)
```

Checks if `x` is a construct.

###### `x`<sup>Required</sup> <a name="x" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.isConstruct.parameter.x"></a>

- *Type:* any

Any object.

---

##### `isOwnedResource` <a name="isOwnedResource" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.isOwnedResource"></a>

```typescript
import { CertificateWithCleanup } from '@servicevic-oss/cdk-cleanup-certificate-validation-records'

CertificateWithCleanup.isOwnedResource(construct: IConstruct)
```

Returns true if the construct was created by CDK, and false otherwise.

###### `construct`<sup>Required</sup> <a name="construct" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.isOwnedResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `isResource` <a name="isResource" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.isResource"></a>

```typescript
import { CertificateWithCleanup } from '@servicevic-oss/cdk-cleanup-certificate-validation-records'

CertificateWithCleanup.isResource(construct: IConstruct)
```

Check whether the given construct is a Resource.

###### `construct`<sup>Required</sup> <a name="construct" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.isResource.parameter.construct"></a>

- *Type:* constructs.IConstruct

---

##### `fromCertificateArn` <a name="fromCertificateArn" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.fromCertificateArn"></a>

```typescript
import { CertificateWithCleanup } from '@servicevic-oss/cdk-cleanup-certificate-validation-records'

CertificateWithCleanup.fromCertificateArn(scope: Construct, id: string, certificateArn: string)
```

Import a certificate.

###### `scope`<sup>Required</sup> <a name="scope" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.fromCertificateArn.parameter.scope"></a>

- *Type:* constructs.Construct

---

###### `id`<sup>Required</sup> <a name="id" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.fromCertificateArn.parameter.id"></a>

- *Type:* string

---

###### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.fromCertificateArn.parameter.certificateArn"></a>

- *Type:* string

---

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.property.node">node</a></code> | <code>constructs.Node</code> | The tree node. |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.property.env">env</a></code> | <code>aws-cdk-lib.ResourceEnvironment</code> | The environment this resource belongs to. |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.property.stack">stack</a></code> | <code>aws-cdk-lib.Stack</code> | The stack in which this resource is defined. |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.property.certificateArn">certificateArn</a></code> | <code>string</code> | The certificate's ARN. |

---

##### `node`<sup>Required</sup> <a name="node" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.property.node"></a>

```typescript
public readonly node: Node;
```

- *Type:* constructs.Node

The tree node.

---

##### `env`<sup>Required</sup> <a name="env" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.property.env"></a>

```typescript
public readonly env: ResourceEnvironment;
```

- *Type:* aws-cdk-lib.ResourceEnvironment

The environment this resource belongs to.

For resources that are created and managed by the CDK
(generally, those created by creating new class instances like Role, Bucket, etc.),
this is always the same as the environment of the stack they belong to;
however, for imported resources
(those obtained from static methods like fromRoleArn, fromBucketName, etc.),
that might be different than the stack they were imported into.

---

##### `stack`<sup>Required</sup> <a name="stack" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.property.stack"></a>

```typescript
public readonly stack: Stack;
```

- *Type:* aws-cdk-lib.Stack

The stack in which this resource is defined.

---

##### `certificateArn`<sup>Required</sup> <a name="certificateArn" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateWithCleanup.property.certificateArn"></a>

```typescript
public readonly certificateArn: string;
```

- *Type:* string

The certificate's ARN.

---


## Structs <a name="Structs" id="Structs"></a>

### CertificateValidationRecordCleanupProps <a name="CertificateValidationRecordCleanupProps" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanupProps"></a>

#### Initializer <a name="Initializer" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanupProps.Initializer"></a>

```typescript
import { CertificateValidationRecordCleanupProps } from '@servicevic-oss/cdk-cleanup-certificate-validation-records'

const certificateValidationRecordCleanupProps: CertificateValidationRecordCleanupProps = { ... }
```

#### Properties <a name="Properties" id="Properties"></a>

| **Name** | **Type** | **Description** |
| --- | --- | --- |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanupProps.property.certificate">certificate</a></code> | <code>aws-cdk-lib.aws_certificatemanager.ICertificate</code> | The ACM certificate that created the validation records. |
| <code><a href="#@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanupProps.property.hostedZone">hostedZone</a></code> | <code>aws-cdk-lib.aws_route53.IHostedZone</code> | The Route53 hosted zone where the certificate validation records have been created for a certificate. |

---

##### `certificate`<sup>Required</sup> <a name="certificate" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanupProps.property.certificate"></a>

```typescript
public readonly certificate: ICertificate;
```

- *Type:* aws-cdk-lib.aws_certificatemanager.ICertificate

The ACM certificate that created the validation records.

---

##### `hostedZone`<sup>Required</sup> <a name="hostedZone" id="@servicevic-oss/cdk-cleanup-certificate-validation-records.CertificateValidationRecordCleanupProps.property.hostedZone"></a>

```typescript
public readonly hostedZone: IHostedZone;
```

- *Type:* aws-cdk-lib.aws_route53.IHostedZone

The Route53 hosted zone where the certificate validation records have been created for a certificate.

---



