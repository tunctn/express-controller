import { Router } from 'express';
import { publicControllers as c } from '../controllers/public.controller';
import { Route } from '../interfaces/route.interface';

const router = Router();
const path = '/public';

router.get('/weather', c.getWeather);

export const publicRoute: Route = { path, router };
