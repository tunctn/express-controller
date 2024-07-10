"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.privateRoute = void 0;
const express_1 = require("express");
const private_controller_1 = require("../controllers/private.controller");
const router = (0, express_1.Router)();
const path = '/private';
router.get('/me', private_controller_1.privateControllers.getMe);
exports.privateRoute = { path, router };
