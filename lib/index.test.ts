import {SecureBucket} from "../lib/index";
import {App, Stack} from "@aws-cdk/core";
import {expect as expectCDK, haveResource} from '@aws-cdk/assert';

test('Has one encrypted Bucket', () => {
    const mockApp = new App();
    const stack = new Stack(mockApp, 'testing-stack');

    new SecureBucket(stack, 'testing', {});

    expectCDK(stack).to(haveResource("AWS::S3::Bucket", {
        "BucketEncryption": {
            "ServerSideEncryptionConfiguration": [
                {
                    "ServerSideEncryptionByDefault": {
                        "SSEAlgorithm": "aws:kms"
                    }
                }
            ]
        }
    }));

});
