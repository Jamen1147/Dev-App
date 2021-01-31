import { check } from 'express-validator';
import inputValidator from '../../middlewares/inputValidator';

export const registerValidations = inputValidator([
  check('name', 'name is required').not().isEmpty(),
  check('email', 'expected valid email').isEmail(),
  check('password', 'password should at least be 6 or more character').isLength(
    {
      min: 6,
    }
  ),
]);
