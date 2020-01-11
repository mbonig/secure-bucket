import { Construct } from "@aws-cdk/core";
import { BucketProps } from '@aws-cdk/aws-s3';
export declare class SecureBucket extends Construct {
    constructor(scope: Construct, id: string, props: BucketProps);
}
