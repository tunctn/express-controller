import { Controller } from '@express-controller/core';

export interface RedisPlugin {
  withRedis(): void;
}

declare module '@express-controller/core' {
  interface Controller {
    withRedis(): void;
  }
}

export const redisPlugin = <T extends Controller>(base: T): T & RedisPlugin => {
  (base as T & RedisPlugin).withRedis = function (): void {
    console.log('Redis Plugin!');
  };
  return base as T & RedisPlugin;
};
