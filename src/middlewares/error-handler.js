import { CustomError } from '../errors/custom-error.js';

export const errorHanlder = (err, _, res, __) => {
  if (err instanceof CustomError) {
    res.status(err.statusCode).send({ error: err.serialize() });
  } else {
    res.status(422).send({ error: { message: 'Unprocessable entity' } });
  }
};
