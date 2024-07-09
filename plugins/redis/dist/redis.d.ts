import { Controller } from '@express-controller/core';
export interface RedisPlugin {
    withRedis(): void;
}
declare module '@express-controller/core' {
    interface Controller {
        withRedis(): void;
    }
}
export declare const redisPlugin: <T extends Controller>(base: T) => T & RedisPlugin;
