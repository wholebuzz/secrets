import * as AWS from 'aws-sdk'
import { SecretManager } from './secrets'

/**
 * Amazon Web Services S3 [[SecretManager]] implemented with `aws-sdk`.
 */
export class AmazonWebServicesSecretManager extends SecretManager {
  secrets: AWS.SecretsManager

  /**
   * The SDK automatically detects AWS credentials set as variables in your
   * environment and uses them for SDK requests, eliminating the need to manage
   * credentials in your application. The environment variables that you set to
   * provide your credentials are:
   * AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_SESSION_TOKEN
   * https://docs.aws.amazon.com/sdk-for-javascript/v2/developer-guide/loading-node-credentials-environment.html
   */
  constructor() {
    super()
    this.secrets = new AWS.SecretsManager()
  }

  async getSecret(name: string) {
    const data = await this.secrets.getSecretValue({ SecretId: name }).promise()
    if ('SecretString' in data) {
      return data.SecretString
    } else {
      return data.SecretBinary ? data.SecretBinary.toString('ascii') : undefined
    }
  }
}
