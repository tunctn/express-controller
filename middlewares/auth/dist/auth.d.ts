import type { NextFunction, Request, Response } from 'express';
export interface AuthPlugin<AuthReturn = unknown> {
    withAuth(): Promise<AuthReturn>;
}
declare module '@express-controller/core' {
    interface Controller {
        withAuth(): Omit<Controller, 'withAuth'>;
    }
}
export declare const authMiddleware: <AuthReturn>(executeFn: ({ req, res, next }: {
    req: Request;
    res: Response;
    next: NextFunction;
}) => Promise<AuthReturn>) => {
    executeFn: ({ req, res, next }: {
        req: Request;
        res: Response;
        next: NextFunction;
    }) => Promise<AuthReturn>;
};
