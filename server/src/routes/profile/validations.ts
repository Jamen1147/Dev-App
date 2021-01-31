import { check } from 'express-validator';
import inputValidator from '../../middlewares/inputValidator';

export const profileValidations = inputValidator([
  check('status', 'Status is required').not().isEmpty(),
  check('skills', 'Skills is required').not().isEmpty(),
]);

export const experienceValidations = inputValidator([
  check('title', 'Title is required').not().isEmpty(),
  check('company', 'company is required').not().isEmpty(),
  check('from', 'From date is required').not().isEmpty(),
]);

export const educationValidations = inputValidator([
  check('school', 'school is required').not().isEmpty(),
  check('degree', 'degree is required').not().isEmpty(),
  check('fieldofstudy', 'fieldofstudy is required').not().isEmpty(),
  check('from', 'From date is required').not().isEmpty(),
]);
