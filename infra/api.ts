import { bucket, table } from './storage';

export const myApi = new sst.aws.Function('MyApi', {
  url: true,
  link: [bucket, table],
  handler: 'packages/functions/src/api/index.handler',
});
