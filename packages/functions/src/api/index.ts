import { Hono } from 'hono';
import { handle } from 'hono/aws-lambda';
import user from './user';
import person from './person';
import seating from './seating';
import { logger } from 'hono/logger';
import { authMiddleware } from '@functions/auth/middleware';

const app = new Hono()
  .use(logger())
  .use(authMiddleware())
  .route('/user', user)
  .route('/student', person)
  .route('/seating', seating);

export const handler = handle(app);
export type App = typeof app;
