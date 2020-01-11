import {Construct} from "@aws-cdk/core";
import {Bucket, BucketProps} from '@aws-cdk/aws-s3'

export class SecureBucket extends Construct {

    constructor(scope: Construct, id: string, props: BucketProps) {
        super(scope, id);

        new Bucket(scope, `${id}-bucket`, {...props});

    }
}
