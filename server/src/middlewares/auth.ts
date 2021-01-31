import jwt from 'jsonwebtoken';
import config from 'config';
import { Request, Response, NextFunction } from 'express';
import { Unthorized } from '../utils/error';

const authorize = (req: Request, res: Response, next: NextFunction) => {
  try {
    const token = req.header('x-auth-token');
    if (!token) {
      throw new Unthorized('Unthorized');
    }
    const decoded = jwt.verify(token, config.jwt.secret);
    // @ts-expect-error - decoded should be an object that contains a property call user
    req.user = decoded.user;
    next();
  } catch (error) {
    next(new Unthorized('Invalid token or token has been expired'));
  }
};

export default authorize;
