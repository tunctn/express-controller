import { Controller } from '@express-controller/core';
import type { NextFunction, Request, Response } from 'express';

import { ZodSchema } from 'zod';

export type RequestValidation<TParams, TQuery, TBody> = {
  params?: ZodSchema<TParams>;
  query?: ZodSchema<TQuery>;
  body?: ZodSchema<TBody>;
};

type RequestWithValidation = Omit<Request, 'body' | 'params' | 'query'> & { body: unknown; params: unknown; query: unknown };

export interface ValidationMiddleware<ValidationReturn = unknown> {
  validate(): Promise<ValidationReturn>;
}

declare module '@express-controller/core' {
  interface Controller {
    validate(): Omit<Controller, 'validate'>;
  }
}

export const validationMiddleware = <ValidationReturn>(
  executeFn: ({ req, res, next }: { req: Request; res: Response; next: NextFunction }) => Promise<ValidationReturn>
) => {
  return {
    executeFn: executeFn,
  };
};
