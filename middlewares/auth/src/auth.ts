import { Controller } from '@express-controller/core';
import type { NextFunction, Request, Response } from 'express';

export interface AuthPlugin<AuthReturn = unknown> {
  withAuth(): Promise<AuthReturn>;
}

declare module '@express-controller/core' {
  interface Controller {
    withAuth(): Omit<Controller, 'withAuth'>;
  }
}

export const authMiddleware = <AuthReturn>(
  executeFn: ({ req, res, next }: { req: Request; res: Response; next: NextFunction }) => Promise<AuthReturn>
) => {
  return {
    executeFn: executeFn,
  };
};
