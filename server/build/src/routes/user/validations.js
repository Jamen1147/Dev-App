'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.registerValidations = void 0;
var express_validator_1 = require('express-validator');
var inputValidator_1 = __importDefault(
  require('../../middlewares/inputValidator')
);
exports.registerValidations = inputValidator_1.default([
  express_validator_1.check('name', 'name is required').not().isEmpty(),
  express_validator_1.check('email', 'expected valid email').isEmail(),
  express_validator_1
    .check('password', 'password should at least be 6 or more character')
    .isLength({
      min: 6,
    }),
]);
