import { validationResult, ValidationError } from 'express-validator';
import { Request, Response, NextFunction, RequestHandler } from 'express';

const messageMapper = (errors: ValidationError[]) => errors[0].msg;

const inputValidator = (checks: RequestHandler[]) => {
  return [
    ...checks,
    (req: Request, res: Response, next: NextFunction) => {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.fail(messageMapper(errors.array()));
      }
      next();
    },
  ];
};

export default inputValidator;
