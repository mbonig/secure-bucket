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

## Integration Test

If you want to see full usage, you can run

```shell script
$ cdk synth
```

to produce a basic stack with one SecureBucket resource

## L2 Construct - Inheritance vs Composition

This construct is a wrapper around a standard L2 Bucket. However, because it wraps it, you can't just use it in all 
the same places you could use a standard L2 bucket. You have to pass around the public field `.bucket` from the construct.
This was done as it's more representative of the types of constructs I expect people to build (composed of multiple L2s). 
However, if you were to actually want to use this construct in a production environment you'd
probably use the inheritance model instead. Checkout the [feature/inheritance](https://github.com/mbonig/secure-bucket/tree/feature/inheritance) branch for that version. 

## License

[MIT License](https://opensource.org/licenses/MIT) 
