# @wholebuzz/secrets

Secrets interface abstraction with implementations for GCP and AWS.

# Example

```
import { AmazonWebServicesSecretManager } from '@wholebuzz/secrets'

const secrets = new AmazonWebServicesSecretManager()
const secret = await secrets.getSecret('secret-name')
```
