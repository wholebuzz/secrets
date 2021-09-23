[@wholebuzz/secrets](../README.md) / [Exports](../modules.md) / [aws](../modules/aws.md) / AmazonWebServicesSecretManager

# Class: AmazonWebServicesSecretManager

[aws](../modules/aws.md).AmazonWebServicesSecretManager

Amazon Web Services S3 [SecretManager](secrets.secretmanager.md) implemented with `aws-sdk`.

## Hierarchy

- [*SecretManager*](secrets.secretmanager.md)

  ↳ **AmazonWebServicesSecretManager**

## Table of contents

### Constructors

- [constructor](aws.amazonwebservicessecretmanager.md#constructor)

### Properties

- [secrets](aws.amazonwebservicessecretmanager.md#secrets)

### Methods

- [getSecret](aws.amazonwebservicessecretmanager.md#getsecret)

## Constructors

### constructor

\+ **new AmazonWebServicesSecretManager**(): [*AmazonWebServicesSecretManager*](aws.amazonwebservicessecretmanager.md)

The SDK automatically detects AWS credentials set as variables in your
environment and uses them for SDK requests, eliminating the need to manage
credentials in your application. The environment variables that you set to
provide your credentials are:
AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_SESSION_TOKEN
https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html

**Returns:** [*AmazonWebServicesSecretManager*](aws.amazonwebservicessecretmanager.md)

Overrides: [SecretManager](secrets.secretmanager.md)

Defined in: [aws.ts:8](https://github.com/wholebuzz/secrets/blob/master/src/aws.ts#L8)

## Properties

### secrets

• **secrets**: *SecretsManager*

Defined in: [aws.ts:8](https://github.com/wholebuzz/secrets/blob/master/src/aws.ts#L8)

## Methods

### getSecret

▸ **getSecret**(`name`: *string*): *Promise*<undefined \| string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

**Returns:** *Promise*<undefined \| string\>

Overrides: [SecretManager](secrets.secretmanager.md)

Defined in: [aws.ts:23](https://github.com/wholebuzz/secrets/blob/master/src/aws.ts#L23)
