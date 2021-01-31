import { Router, Request } from 'express';
import authorize from '../../middlewares/auth';
import { loginValidations } from './validations';
import { TLoginParams } from '../../services/auth';
import services from '../../services';

const router = Router();

/**
 * @swagger
 * api/v1//auth:
 *   get:
 *     summary: Get Currently logged-in user
 *     tags:
 *       - Auth
 *     description: Check if user is authorized and return the user.
 *     responses:
 *       200:
 *         description: A user.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               $ref: '#/components/schemas/User'
 */
router.get('/', authorize, async (req, res, next) => {
  try {
    const user = await services.user.getCurrentUser(req.user!.id);
    res.success(user);
  } catch (error) {
    next(error);
  }
});

// Login
router.post(
  '/',
  ...loginValidations,
  async (req: Request<any, any, TLoginParams>, res, next) => {
    try {
      const result = await services.auth.login(req.body);
      res.success(result);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
