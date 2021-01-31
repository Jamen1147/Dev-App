'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
exports.educationValidations = exports.experienceValidations = exports.profileValidations = void 0;
var express_validator_1 = require('express-validator');
var inputValidator_1 = __importDefault(
  require('../../middlewares/inputValidator')
);
exports.profileValidations = inputValidator_1.default([
  express_validator_1.check('status', 'Status is required').not().isEmpty(),
  express_validator_1.check('skills', 'Skills is required').not().isEmpty(),
]);
exports.experienceValidations = inputValidator_1.default([
  express_validator_1.check('title', 'Title is required').not().isEmpty(),
  express_validator_1.check('company', 'company is required').not().isEmpty(),
  express_validator_1.check('from', 'From date is required').not().isEmpty(),
]);
exports.educationValidations = inputValidator_1.default([
  express_validator_1.check('school', 'school is required').not().isEmpty(),
  express_validator_1.check('degree', 'degree is required').not().isEmpty(),
  express_validator_1
    .check('fieldofstudy', 'fieldofstudy is required')
    .not()
    .isEmpty(),
  express_validator_1.check('from', 'From date is required').not().isEmpty(),
]);
