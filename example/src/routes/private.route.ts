import { Router } from 'express';
import { privateControllers as c } from '../controllers/private.controller';
import { Route } from '../interfaces/route.interface';

const router = Router();
const path = '/private';

router.get('/me', c.getMe);

export const privateRoute: Route = { path, router };
