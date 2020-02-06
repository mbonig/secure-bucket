import {SecureBucket} from "../lib/index";
import {App, Stack} from "@aws-cdk/core";
import '@aws-cdk/assert/jest';
import {Bucket, BucketEncryption} from "@aws-cdk/aws-s3";

test('Exposes underlying bucket', ()=>{
    const mockApp = new App();
    const stack = new Stack(mockApp, 'testing-stack');

    const bucketWrapper = new SecureBucket(stack, 'testing', {});
    expect(bucketWrapper.bucket).toBeInstanceOf(Bucket);

});

test('Has one encrypted Bucket', () => {
    const mockApp = new App();
    const stack = new Stack(mockApp, 'testing-stack');

    new SecureBucket(stack, 'testing', {});

    expect(stack).toHaveResource("AWS::S3::Bucket", {
        "BucketEncryption": {
            "ServerSideEncryptionConfiguration": [
                {
                    "ServerSideEncryptionByDefault": {
                        "SSEAlgorithm": "aws:kms"
                    }
                }
            ]
        }
    });

});

test('Does not allow for unencrypted buckets', () => {
    const mockApp = new App();
    const stack = new Stack(mockApp, 'testing-stack');

    new SecureBucket(stack, 'testing', {encryption: BucketEncryption.UNENCRYPTED});

    expect(stack).toHaveResource("AWS::S3::Bucket", {
        "BucketEncryption": {
            "ServerSideEncryptionConfiguration": [
                {
                    "ServerSideEncryptionByDefault": {
                        "SSEAlgorithm": "aws:kms"
                    }
                }
            ]
        }
    });
});

test('Allows override of default encryption', () => {
    const mockApp = new App();
    const stack = new Stack(mockApp, 'testing-stack');

    new SecureBucket(stack, 'testing', {encryption: BucketEncryption.S3_MANAGED});

    expect(stack).toHaveResource("AWS::S3::Bucket", {
        "BucketEncryption": {
            "ServerSideEncryptionConfiguration": [
                {
                    "ServerSideEncryptionByDefault": {
                        "SSEAlgorithm": "AES256"
                    }
                }
            ]
        }
    });
});
