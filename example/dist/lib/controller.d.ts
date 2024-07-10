/// <reference types="qs" />
/// <reference types="express" />
import { Controller } from '@express-controller/core';
export declare const createController: () => Controller<{
    test: {
        test: string;
    };
} & {
    user: {
        id: number;
        name: string;
        email: string;
    };
} & import("express").Request<import("express-serve-static-core").ParamsDictionary, any, any, import("qs").ParsedQs, Record<string, any>>, import("express").Response<any, Record<string, any>>>;
