"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const private_route_1 = require("./private.route");
const public_route_1 = require("./public.route");
exports.routes = [private_route_1.privateRoute, public_route_1.publicRoute];
