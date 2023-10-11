import express from 'express';
import { PORT } from '../src/constants/environment-variables.js';
import { AppRouter } from './routers/index.js';
import { invalidRoutes } from './middlewares/invalid-route.js';
import { errorHanlder } from './middlewares/error-handler.js';

const app = express();

app.use(AppRouter);
app.all('*', invalidRoutes);
app.use(errorHanlder);

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
