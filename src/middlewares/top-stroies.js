import { PAGES } from '../constants/nyt/pages.js';
import { RequestValidationError } from '../errors/request-validation-error.js';

export const validatePage = (req, _, next) => {
  const { page } = req.params;

  if (!PAGES.includes(page)) {
    throw new RequestValidationError('Invalid page');
  }

  next();
};
