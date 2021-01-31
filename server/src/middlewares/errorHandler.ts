import { Response } from 'express';
import { HttpError } from '../utils/error';

const errorHandler = (
  error: HttpError | Error,
  req: any,
  res: Response,
  next: any
) => {
  if (error instanceof HttpError) {
    return res.fail(error.message, error.getCode());
  }
  console.error(error);
  return res.fail(error.message, 500);
};

export default errorHandler;
