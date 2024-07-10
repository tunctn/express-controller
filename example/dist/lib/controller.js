"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createController = void 0;
const auth_middleware_1 = require("@express-controller/auth-middleware");
const core_1 = require("@express-controller/core");
const auth = (0, auth_middleware_1.authMiddleware)(({ req, res }) => __awaiter(void 0, void 0, void 0, function* () {
    // Logic to get the user
    console.log('Auth plugin is called');
    const user = {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
    };
    return { user };
}));
const auth2 = (0, auth_middleware_1.authMiddleware)(({ req, res }) => __awaiter(void 0, void 0, void 0, function* () {
    // Logic to get the user
    console.log('test plugin is called');
    const test = {
        test: 'test',
    };
    return { test };
}));
const createController = () => new core_1.Controller().extend(auth).extend(auth2);
exports.createController = createController;
(0, exports.createController)()
    .withAuth()
    .build(({ req, res }) => __awaiter(void 0, void 0, void 0, function* () {
    // req.user;
    // req.user.id;
    // req.test.test;
    req.app;
    return res.status(200).json({ message: 'Hello World!' });
}));
