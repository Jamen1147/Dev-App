'use strict';
Object.defineProperty(exports, '__esModule', { value: true });
var error_1 = require('../utils/error');
var errorHandler = function (error, req, res, next) {
  if (error instanceof error_1.HttpError) {
    return res.fail(error.message, error.getCode());
  }
  console.error(error);
  return res.fail(error.message, 500);
};
exports.default = errorHandler;
