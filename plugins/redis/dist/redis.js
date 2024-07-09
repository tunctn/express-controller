"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.redisPlugin = void 0;
const redisPlugin = (base) => {
    base.withRedis = function () {
        console.log('Redis Plugin!');
    };
    return base;
};
exports.redisPlugin = redisPlugin;
