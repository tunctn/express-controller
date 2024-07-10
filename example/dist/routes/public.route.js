"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publicRoute = void 0;
const express_1 = require("express");
const public_controller_1 = require("../controllers/public.controller");
const router = (0, express_1.Router)();
const path = '/public';
router.get('/weather', public_controller_1.publicControllers.getWeather);
exports.publicRoute = { path, router };
