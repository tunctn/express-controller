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
exports.Controller = void 0;
class Controller {
    constructor() {
        this._middlewares = [];
    }
    extend(middleware) {
        this._middlewares.push(middleware);
        return Object.assign(new Controller(), this);
    }
    build(executeFn) {
        return (req, res, next) => __awaiter(this, void 0, void 0, function* () {
            for (const middleware of this._middlewares) {
                yield middleware.executeFn({ req: req, res: res, next: next });
            }
            yield executeFn({ req: req, res: res, next });
            try {
            }
            catch (err) {
                return res.status(500).json({ message: err.message });
            }
        });
    }
}
exports.Controller = Controller;
