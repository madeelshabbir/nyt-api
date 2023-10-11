import { Router } from 'express';

import { TopStoriesRouter } from './top-stories.js';
import { DEFAULT_ROUTER_OPTIONS } from '../constants/defaults.js';

export const AppRouter = Router(DEFAULT_ROUTER_OPTIONS).use(
  '/api/:version',
  TopStoriesRouter,
);
