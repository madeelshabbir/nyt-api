import { CustomError } from './custom-error.js';

export class RequestValidationError extends CustomError {
  constructor(message) {
    super(400, message);
  }
};
