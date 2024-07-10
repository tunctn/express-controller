import type { NextFunction, Request, Response } from 'express';
export interface RedisPlugin<RedisReturn = unknown> {
    withRedis(): Promise<RedisReturn>;
}
declare module '@express-controller/core' {
    interface Controller {
        withRedis(): Omit<Controller, 'withRedis'>;
    }
}
export declare const redisMiddleware: <RedisReturn>(executeFn: ({ req, res, next }: {
    req: Request;
    res: Response;
    next: NextFunction;
}) => Promise<RedisReturn>) => {
    executeFn: ({ req, res, next }: {
        req: Request;
        res: Response;
        next: NextFunction;
    }) => Promise<RedisReturn>;
};
