import {Construct} from "@aws-cdk/core";
import {Bucket, BucketEncryption, BucketProps} from '@aws-cdk/aws-s3'

export class SecureBucket extends Bucket {

    constructor(scope: Construct, id: string, props?: BucketProps) {
        super(scope, id, {
            ...props,
            encryption: props && props.encryption && props.encryption != BucketEncryption.UNENCRYPTED
                ? props.encryption
                : BucketEncryption.KMS_MANAGED
        });
    }
}
