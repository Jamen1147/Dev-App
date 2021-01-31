import { Router, Request } from 'express';
import services from '../../services';
import { TCreateUserParams } from '../../services/user';
import { registerValidations } from './validations';

const router = Router();

/**
 * @swagger
 * api/v1//user:
 *   post:
 *     summary: Register a user
 *     tags:
 *       - User
 *     description: Check if inputs are valid and check if user is existing, then create a new user.
 *     responses:
 *       200:
 *         description: A user and the token.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/User'
 */
router.post(
  '/',
  ...registerValidations,
  async (req: Request<any, any, TCreateUserParams>, res, next) => {
    try {
      const result = await services.user.createUser(req.body);
      res.success(result);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
