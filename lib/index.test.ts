import {SecureBucket} from "../lib/index";
import {App, Stack} from "@aws-cdk/core";
import {expect as expectCDK, haveResource} from '@aws-cdk/assert';
import {BucketEncryption} from "@aws-cdk/aws-s3";

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

test('Does not allow for unencrypted buckets', () => {
    const mockApp = new App();
    const stack = new Stack(mockApp, 'testing-stack');

    new SecureBucket(stack, 'testing', {encryption: BucketEncryption.UNENCRYPTED});

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

test('Allows override of default encryption', () => {
    const mockApp = new App();
    const stack = new Stack(mockApp, 'testing-stack');

    new SecureBucket(stack, 'testing', {encryption: BucketEncryption.S3_MANAGED});

    expectCDK(stack).to(haveResource("AWS::S3::Bucket", {
        "BucketEncryption": {
            "ServerSideEncryptionConfiguration": [
                {
                    "ServerSideEncryptionByDefault": {
                        "SSEAlgorithm": "AES256"
                    }
                }
            ]
        }
    }));
});
