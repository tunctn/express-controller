"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Greeting = void 0;
class Greeting {
    greet() {
        console.log('Greeting, Node user!');
    }
    extend(plugin) {
        return plugin(this);
    }
}
exports.Greeting = Greeting;
