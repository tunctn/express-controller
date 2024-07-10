"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const routes_1 = require("./routes");
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
// Health check
app.use('/health', (_req, res) => res.status(200).send('OK'));
// Routes
routes_1.routes.forEach(({ router, path }) => app.use(path, router));
const port = (_a = Number(process.env['PORT'])) !== null && _a !== void 0 ? _a : 4000;
const nodeEnv = process.env['NODE_ENV'];
app.listen(port, () => {
    console.info(`=================================`);
    console.info(`======== ENV: ${nodeEnv} ========`);
    console.info(`🚀 App listening on the port ${port}`);
    console.info(`=================================`);
});
