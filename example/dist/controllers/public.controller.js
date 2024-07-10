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
exports.publicControllers = exports.getWeather = void 0;
const lib_1 = require("../lib");
exports.getWeather = (0, lib_1.createController)().build(({ req, res }) => __awaiter(void 0, void 0, void 0, function* () {
    // Logic to get the user
    const user = {
        id: 1,
        name: 'John Doe',
        email: 'john@example.com',
    };
    return res.status(200).json(user);
}));
exports.publicControllers = {
    getWeather: exports.getWeather,
};
