import {Construct} from "@aws-cdk/core";
import {Bucket, BucketEncryption, BucketProps} from '@aws-cdk/aws-s3'

export class SecureBucket extends Construct {

    constructor(scope: Construct, id: string, props?: BucketProps) {
        super(scope, id);

        let newProps: BucketProps = {...props};
        if (!props || props?.encryption === undefined || props?.encryption === BucketEncryption.UNENCRYPTED) {
            newProps.encryption = BucketEncryption.KMS_MANAGED;
        }
        new Bucket(this, `${id}-bucket`, newProps);

    }
}
