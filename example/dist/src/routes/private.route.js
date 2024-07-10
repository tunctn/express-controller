import { Router } from 'express';
import { privateControllers as c } from '../controllers/private.controller';
var router = Router();
var path = '/private';
router.get('/me', c.getMe);
export var privateRoute = {
    path: path,
    router: router
};
