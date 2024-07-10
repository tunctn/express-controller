"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.redis = void 0;
const ioredis_1 = __importDefault(require("ioredis"));
const REDIS_URL = process.env['REDIS_URL'];
if (!REDIS_URL || REDIS_URL === '') {
    throw new Error('REDIS_URL is not set');
}
exports.redis = new ioredis_1.default(REDIS_URL, {
    keyPrefix: 'express-controller-demo::',
});
