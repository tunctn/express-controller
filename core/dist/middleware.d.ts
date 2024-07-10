import type { NextFunction, Request, Response } from 'express';
type ExecuteFn<FnReturn> = ({ req, res, next }: {
    req: Request;
    res: Response;
    next: NextFunction;
}) => Promise<FnReturn>;
export type Middleware<PluginRequestExtend> = {
    executeFn: ExecuteFn<PluginRequestExtend>;
};
export {};
