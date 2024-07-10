import type { NextFunction, Request, Response } from 'express';
import { Middleware } from './middleware';

type BaseRequest = Request;
type BaseResponse = Response;

type ControllerBuilder<RequestType = BaseRequest, ResponseType = BaseResponse> = Controller<RequestType, ResponseType>;

export class Controller<ReqType = BaseRequest, ResType = BaseResponse> {
  private _middlewares: Middleware<unknown>[] = [];

  extend<MiddlewareExtend, TReq = ReqType, TRes = ResType>(
    middleware: Middleware<MiddlewareExtend>
  ): ControllerBuilder<MiddlewareExtend & TReq & ReqType, TRes & ResType> {
    this._middlewares.push(middleware);
    return Object.assign(new Controller(), this) as any;
  }

  public build(executeFn: ({ req, res, next }: { req: ReqType; res: ResType; next: NextFunction }) => Promise<ResType>) {
    return async (req: Request, res: Response & ResType, next: NextFunction) => {
      for (const middleware of this._middlewares) {
        await middleware.executeFn({ req: req as any, res: res as any, next: next as any });
      }

      await executeFn({ req: req as any, res: res as any, next });

      try {
      } catch (err: any) {
        return res.status(500).json({ message: err.message });
      }
    };
  }
}
