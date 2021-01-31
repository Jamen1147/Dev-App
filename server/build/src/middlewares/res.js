'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var res = function (_, res, next) {
  res.success = function (data, code) {
    if (code === void 0) {
      code = 200;
    }
    if (typeof data === 'object') {
      res.status(code).json({
        code: code,
        data: data,
        msg: 'success',
      });
    } else {
      res.status(code).json({
        code: code,
        msg: data,
      });
    }
  };
  res.fail = function (error, code) {
    if (code === void 0) {
      code = 400;
    }
    if (typeof error === 'object') {
      res.status(code).json({
        code: code,
        data: JSON.stringify(error),
        msg: 'error',
      });
    } else {
      res.status(code).json({
        code: code,
        msg: error,
      });
    }
  };
  next();
};
exports.default = res;
