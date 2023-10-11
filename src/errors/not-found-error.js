import { UnprocessableEntityError } from './unprocessable-entity-error.js';

export class NotFoundError extends UnprocessableEntityError {
  constructor() {
    super(404, 'Not found');
  }
}
