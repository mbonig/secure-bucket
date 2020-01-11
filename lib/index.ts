import {Construct} from "@aws-cdk/core";
import {Bucket, BucketEncryption, BucketProps} from '@aws-cdk/aws-s3'

export class SecureBucket extends Construct {

    constructor(scope: Construct, id: string, props: BucketProps) {
        super(scope, id);

        new Bucket(this, `${id}-bucket`, {...props, encryption: BucketEncryption.KMS_MANAGED});

    }
}
