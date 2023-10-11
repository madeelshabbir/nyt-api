import { NotFoundError } from '../errors/not-found-error.js';

export const invalidRoute = () => {
  throw new NotFoundError();
};
