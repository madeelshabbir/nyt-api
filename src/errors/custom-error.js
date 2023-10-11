export class CustomError extends Error {
  constructor(statusCode, message) {
    super(message);

    this.statusCode = statusCode;
  }

  serialize() {
    return { message: this.message };
  }
};
