# A CDK L3 Construct for a Secure Bucket

This is an AWS CDK L3 Construct used to demonstrate the development and publishing process with the AWS CDK.

Please refer to the blog post [here](https://www.matthewbonig.com/2020/01/11/creating-constructs) for more information.


## Usage

Just import and use it.

```typescript
import cdk = require('@aws-cdk/core');
import {SecureBucket} from 'secure-bucket';

export class SandboxCdkStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);

    new SecureBucket(this, 'myBucket',{});
  }
}

```

## Encryption options
This is just a wrapper around an S3 Bucket and the [props](https://docs.aws.amazon.com/cdk/api/latest/docs/@aws-cdk_aws-s3.BucketProps.html) are shared.

However, you cannot supply an `UNENCRYPTED` option for the `encryption` property. If you do, or don't set it at all, it will use the `BucketEncryption.KMS_MANAGED` value by default.

## License

[MIT License](https://opensource.org/licenses/MIT) 
