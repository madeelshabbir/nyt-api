import { CustomError } from './custom-error.js';

export class UnprocessableEntityError extends CustomError {
  constructor(message) {
    super(422, message);
  }
}
