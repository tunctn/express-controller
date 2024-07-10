"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authPlugin = void 0;
const authPlugin = (base) => {
    base.withAuth = function () {
        console.log('Auth plugin!');
    };
    return base;
};
exports.authPlugin = authPlugin;
