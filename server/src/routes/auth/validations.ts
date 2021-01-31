import { check } from 'express-validator';
import inputValidator from '../../middlewares/inputValidator';

export const loginValidations = inputValidator([
  check('email', 'Please include a valid email').isEmail(),
  check('password', 'Password is required').exists(),
]);
