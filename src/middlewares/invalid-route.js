import { NotFoundError } from '../errors/not-found-error.js';

export const invalidRoutes = () => {
  throw new NotFoundError();
};
