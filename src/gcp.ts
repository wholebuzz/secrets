import { v1 } from '@google-cloud/secret-manager'
import { SecretManager } from './secrets'

/**
 * Google Cloud [[SecretManager]] implemented with `@google-cloud/secret-manager`.
 */
export class GoogleCloudSecretManager extends SecretManager {
  secrets: v1.SecretManagerServiceClient

  /**
   * By default, the client will authenticate using the service account file
   * specified by the GOOGLE_APPLICATION_CREDENTIALS environment variable and use
   * the project specified by the GCLOUD_PROJECT environment variable. See
   * https://cloud.google.com/docs/authentication/production#providing_credentials_to_your_application
   */
  constructor(public project: string) {
    super()
    this.secrets = new v1.SecretManagerServiceClient()
  }

  async getSecret(name: string) {
    const [secret] = await this.secrets.accessSecretVersion({
      name: `projects/${this.project}/secrets/${name}/versions/latest`,
    })
    return secret.payload?.data?.toString()
  }
}
