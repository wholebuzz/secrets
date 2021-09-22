/**
 * The [[SecretManager]] stores secrets, e.g. database password.
 */
export abstract class SecretManager {
  abstract getSecret(name: string): Promise<string | undefined>
}
