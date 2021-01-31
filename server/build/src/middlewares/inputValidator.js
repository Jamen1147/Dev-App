'use strict';
var __spreadArrays =
  (this && this.__spreadArrays) ||
  function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++)
      s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
      for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
        r[k] = a[j];
    return r;
  };
Object.defineProperty(exports, '__esModule', { value: true });
var express_validator_1 = require('express-validator');
var messageMapper = function (errors) {
  return errors[0].msg;
};
var inputValidator = function (checks) {
  return __spreadArrays(checks, [
    function (req, res, next) {
      var errors = express_validator_1.validationResult(req);
      if (!errors.isEmpty()) {
        return res.fail(messageMapper(errors.array()));
      }
      next();
    },
  ]);
};
exports.default = inputValidator;
