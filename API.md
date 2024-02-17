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



