import { VERSIONS } from '../constants/nyt/versions.js';
import { RequestValidationError } from '../errors/request-validation-error.js';

export const validateApiVersion = (req, _, next) => {
  const { version } = req.params;

  if (!VERSIONS.includes(version)) {
    throw new RequestValidationError('Invalid api version');
  }

  next();
};
