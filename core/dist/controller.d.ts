import type { NextFunction, Request, Response } from 'express';
import { Middleware } from './middleware';
type BaseRequest = Request;
type BaseResponse = Response;
type ControllerBuilder<RequestType = BaseRequest, ResponseType = BaseResponse> = Controller<RequestType, ResponseType>;
export declare class Controller<ReqType = BaseRequest, ResType = BaseResponse> {
    private _middlewares;
    extend<MiddlewareExtend, TReq = ReqType, TRes = ResType>(middleware: Middleware<MiddlewareExtend>): ControllerBuilder<MiddlewareExtend & TReq & ReqType, TRes & ResType>;
    build(executeFn: ({ req, res, next }: {
        req: ReqType;
        res: ResType;
        next: NextFunction;
    }) => Promise<ResType>): (req: Request, res: Response & ResType, next: NextFunction) => Promise<(Response<any, Record<string, any>> & ResType) | undefined>;
}
export {};
