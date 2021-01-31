'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.loginValidations = void 0;
var express_validator_1 = require('express-validator');
var inputValidator_1 = __importDefault(
  require('../../middlewares/inputValidator')
);
exports.loginValidations = inputValidator_1.default([
  express_validator_1.check('email', 'Please include a valid email').isEmail(),
  express_validator_1.check('password', 'Password is required').exists(),
]);
