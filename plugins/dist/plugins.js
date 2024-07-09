"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.farewellPlugin = void 0;
const farewellPlugin = (base) => {
    base.farewell = function () {
        console.log('Farewell, Node user!');
    };
    return base;
};
exports.farewellPlugin = farewellPlugin;
