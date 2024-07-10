import { Router } from 'express';
import { publicControllers as c } from '../controllers/public.controller';
var router = Router();
var path = '/public';
router.get('/weather', c.getWeather);
export var publicRoute = {
    path: path,
    router: router
};
