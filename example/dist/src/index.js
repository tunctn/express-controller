import express from 'express';
import { routes } from './routes';
var app = express();
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));
// Health check
app.use('/health', function(_req, res) {
    return res.status(200).send('OK');
});
// Routes
routes.forEach(function(param) {
    var router = param.router, path = param.path;
    return app.use(path, router);
});
var _Number;
var port = (_Number = Number(process.env['PORT'])) !== null && _Number !== void 0 ? _Number : 4000;
var nodeEnv = process.env['NODE_ENV'];
app.listen(port, function() {
    console.info("=================================");
    console.info("======== ENV: ".concat(nodeEnv, " ========"));
    console.info("\uD83D\uDE80 App listening on the port ".concat(port));
    console.info("=================================");
});
