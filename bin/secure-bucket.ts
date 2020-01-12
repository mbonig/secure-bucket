import {SecureBucket} from "../lib/index";
import {App, Stack} from "@aws-cdk/core";

const app = new App();
const stack = new Stack(app, 'testing-stack');
new SecureBucket(stack, 'test', {});

app.synth();
