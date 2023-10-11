import express from 'express';
import cors from 'cors';

import { CLIENT_HOST, PORT } from '../src/constants/environment-variables.js';
import { AppRouter } from './routers/index.js';
import { invalidRoute } from './middlewares/invalid-route.js';
import { errorHanlder } from './middlewares/error-handler.js';

const app = express();

app.use(cors({ origin: CLIENT_HOST }));
app.use(AppRouter);
app.all('*', invalidRoute);
app.use(errorHanlder);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
