/// <reference types="qs" />
/// <reference types="express" />
export declare const getWeather: (req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: import("express").Response<any, Record<string, any>> & import("express").Response<any, Record<string, any>>, next: import("express").NextFunction) => Promise<(import("express").Response<any, Record<string, any>> & import("express").Response<any, Record<string, any>>) | undefined>;
export declare const publicControllers: {
    getWeather: (req: import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, res: import("express").Response<any, Record<string, any>> & import("express").Response<any, Record<string, any>>, next: import("express").NextFunction) => Promise<(import("express").Response<any, Record<string, any>> & import("express").Response<any, Record<string, any>>) | undefined>;
};
