[@wholebuzz/secrets](../README.md) / [Exports](../modules.md) / [secrets](../modules/secrets.md) / SecretManager

# Class: SecretManager

[secrets](../modules/secrets.md).SecretManager

The [SecretManager](secrets.secretmanager.md) stores secrets, e.g. database password.

## Hierarchy

- **SecretManager**

  ↳ [*AmazonWebServicesSecretManager*](aws.amazonwebservicessecretmanager.md)

  ↳ [*GoogleCloudSecretManager*](gcp.googlecloudsecretmanager.md)

## Table of contents

### Constructors

- [constructor](secrets.secretmanager.md#constructor)

### Methods

- [getSecret](secrets.secretmanager.md#getsecret)

## Constructors

### constructor

\+ **new SecretManager**(): [*SecretManager*](secrets.secretmanager.md)

**Returns:** [*SecretManager*](secrets.secretmanager.md)

## Methods

### getSecret

▸ `Abstract` **getSecret**(`name`: *string*): *Promise*<undefined \| string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

**Returns:** *Promise*<undefined \| string\>

Defined in: [secrets.ts:5](https://github.com/wholebuzz/secrets/blob/master/src/secrets.ts#L5)
