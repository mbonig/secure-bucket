import {Construct} from "@aws-cdk/core";
import {Bucket, BucketEncryption, BucketProps} from '@aws-cdk/aws-s3'

export class SecureBucket extends Construct {

    constructor(scope: Construct, id: string, props?: BucketProps) {
        super(scope, id);

        let newProps: BucketProps = {
            ...props,
            encryption: props && props.encryption && props.encryption != BucketEncryption.UNENCRYPTED
                ? props.encryption
                : BucketEncryption.KMS_MANAGED
        };
        new Bucket(this, `${id}-bucket`, newProps);
    }
}
