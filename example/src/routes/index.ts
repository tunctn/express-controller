import type { Route } from '../interfaces/route.interface';
import { privateRoute } from './private.route';
import { publicRoute } from './public.route';

export const routes: Route[] = [privateRoute, publicRoute];
