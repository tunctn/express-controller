"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authMiddleware = void 0;
const authMiddleware = (executeFn) => {
    return {
        executeFn: executeFn,
    };
};
exports.authMiddleware = authMiddleware;
