"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
class Controller {
    build() {
        console.log('Controller!');
    }
    extend(plugins) {
        plugins.forEach((plugin) => {
            plugin(this);
        });
        return this;
    }
}
exports.Controller = Controller;
