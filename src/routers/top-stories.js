import { Router } from 'express';

import { TopStoriesController } from '../controllers/top-stories.js';
import { DEFAULT_ROUTER_OPTIONS } from '../constants/defaults.js';
import { validateApiVersion } from '../middlewares/validate-api-version.js';
import { validatePage } from '../middlewares/top-stroies.js';

const router = Router(DEFAULT_ROUTER_OPTIONS);

const { index } = TopStoriesController;

router.get('/:page', validateApiVersion, validatePage, index);

export const TopStoriesRouter = Router(DEFAULT_ROUTER_OPTIONS).use('/top-stories', router);
