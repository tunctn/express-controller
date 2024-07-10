"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisMiddleware = void 0;
const redisMiddleware = (executeFn) => {
    return {
        executeFn: executeFn,
    };
};
exports.redisMiddleware = redisMiddleware;
