import type { NextFunction, Request, Response } from 'express';
import { ZodSchema } from 'zod';
export type RequestValidation<TParams, TQuery, TBody> = {
    params?: ZodSchema<TParams>;
    query?: ZodSchema<TQuery>;
    body?: ZodSchema<TBody>;
};
export interface ValidationMiddleware<ValidationReturn = unknown> {
    validate(): Promise<ValidationReturn>;
}
declare module '@express-controller/core' {
    interface Controller {
        validate(): Omit<Controller, 'validate'>;
    }
}
export declare const validationMiddleware: <ValidationReturn>(executeFn: ({ req, res, next }: {
    req: Request;
    res: Response;
    next: NextFunction;
}) => Promise<ValidationReturn>) => {
    executeFn: ({ req, res, next }: {
        req: Request;
        res: Response;
        next: NextFunction;
    }) => Promise<ValidationReturn>;
};
