[@wholebuzz/secrets](../README.md) / [Exports](../modules.md) / [gcp](../modules/gcp.md) / GoogleCloudSecretManager

# Class: GoogleCloudSecretManager

[gcp](../modules/gcp.md).GoogleCloudSecretManager

Google Cloud [SecretManager](secrets.secretmanager.md) implemented with `@google-cloud/secret-manager`.

## Hierarchy

- [*SecretManager*](secrets.secretmanager.md)

  ↳ **GoogleCloudSecretManager**

## Table of contents

### Constructors

- [constructor](gcp.googlecloudsecretmanager.md#constructor)

### Properties

- [project](gcp.googlecloudsecretmanager.md#project)
- [secrets](gcp.googlecloudsecretmanager.md#secrets)

### Methods

- [getSecret](gcp.googlecloudsecretmanager.md#getsecret)

## Constructors

### constructor

\+ **new GoogleCloudSecretManager**(`project`: *string*): [*GoogleCloudSecretManager*](gcp.googlecloudsecretmanager.md)

By default, the client will authenticate using the service account file
specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
the project specified by the GCLOUD_PROJECT environment variable. See
https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application

#### Parameters

| Name | Type |
| :------ | :------ |
| `project` | *string* |

**Returns:** [*GoogleCloudSecretManager*](gcp.googlecloudsecretmanager.md)

Overrides: [SecretManager](secrets.secretmanager.md)

Defined in: [gcp.ts:8](https://github.com/wholebuzz/secrets/blob/master/src/gcp.ts#L8)

## Properties

### project

• **project**: *string*

___

### secrets

• **secrets**: *SecretManagerServiceClient*

Defined in: [gcp.ts:8](https://github.com/wholebuzz/secrets/blob/master/src/gcp.ts#L8)

## Methods

### getSecret

▸ **getSecret**(`name`: *string*): *Promise*<undefined \| string\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `name` | *string* |

**Returns:** *Promise*<undefined \| string\>

Overrides: [SecretManager](secrets.secretmanager.md)

Defined in: [gcp.ts:21](https://github.com/wholebuzz/secrets/blob/master/src/gcp.ts#L21)
