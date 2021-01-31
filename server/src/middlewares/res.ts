import { Response, NextFunction } from 'express';

const res = (_: any, res: Response, next: NextFunction) => {
  res.success = <T>(data: T, code = 200) => {
    if (typeof data === 'object') {
      res.status(code).json({
        code,
        data,
        msg: 'success',
      });
    } else {
      res.status(code).json({
        code,
        msg: data,
      });
    }
  };

  res.fail = (error: Record<string, unknown> | string, code = 400) => {
    if (typeof error === 'object') {
      res.status(code).json({
        code,
        data: JSON.stringify(error),
        msg: 'error',
      });
    } else {
      res.status(code).json({
        code,
        msg: error,
      });
    }
  };
  next();
};

export default res;
