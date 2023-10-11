import { Router } from 'express';

import { TopStoriesRouter } from './top-stories.js';

export const AppRouter = Router().use(
  '/api/:version',
  TopStoriesRouter,
);
