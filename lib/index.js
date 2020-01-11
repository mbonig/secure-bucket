"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@aws-cdk/core");
const aws_s3_1 = require("@aws-cdk/aws-s3");
class SecureBucket extends core_1.Construct {
    constructor(scope, id, props) {
        super(scope, id);
        new aws_s3_1.Bucket(this, `${id}-bucket`, { ...props });
    }
}
exports.SecureBucket = SecureBucket;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJpbmRleC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHdDQUF3QztBQUN4Qyw0Q0FBbUQ7QUFFbkQsTUFBYSxZQUFhLFNBQVEsZ0JBQVM7SUFFdkMsWUFBWSxLQUFnQixFQUFFLEVBQVUsRUFBRSxLQUFrQjtRQUN4RCxLQUFLLENBQUMsS0FBSyxFQUFFLEVBQUUsQ0FBQyxDQUFDO1FBRWpCLElBQUksZUFBTSxDQUFDLElBQUksRUFBRSxHQUFHLEVBQUUsU0FBUyxFQUFFLEVBQUMsR0FBRyxLQUFLLEVBQUMsQ0FBQyxDQUFDO0lBRWpELENBQUM7Q0FDSjtBQVJELG9DQVFDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtDb25zdHJ1Y3R9IGZyb20gXCJAYXdzLWNkay9jb3JlXCI7XG5pbXBvcnQge0J1Y2tldCwgQnVja2V0UHJvcHN9IGZyb20gJ0Bhd3MtY2RrL2F3cy1zMydcblxuZXhwb3J0IGNsYXNzIFNlY3VyZUJ1Y2tldCBleHRlbmRzIENvbnN0cnVjdCB7XG5cbiAgICBjb25zdHJ1Y3RvcihzY29wZTogQ29uc3RydWN0LCBpZDogc3RyaW5nLCBwcm9wczogQnVja2V0UHJvcHMpIHtcbiAgICAgICAgc3VwZXIoc2NvcGUsIGlkKTtcblxuICAgICAgICBuZXcgQnVja2V0KHRoaXMsIGAke2lkfS1idWNrZXRgLCB7Li4ucHJvcHN9KTtcblxuICAgIH1cbn1cbiJdfQ==