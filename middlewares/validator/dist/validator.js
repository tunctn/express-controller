"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.validationMiddleware = void 0;
const validationMiddleware = (executeFn) => {
    return {
        executeFn: executeFn,
    };
};
exports.validationMiddleware = validationMiddleware;
