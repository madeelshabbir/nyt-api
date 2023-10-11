import express from 'express';
import { PORT } from '../src/constants/environment-variables.js';

const app = express();

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}!`);
});
