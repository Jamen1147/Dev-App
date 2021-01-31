import { Router, Request } from 'express';
import authorize from '../../middlewares/auth';
import { IProfile } from '../../models/Profile';
import services from '../../services';
import { profileValidations } from './validations';

const router = Router();

router.get('/me', authorize, async (req, res, next) => {
  try {
    const profile = await services.profile.getMyProfile(req.user!.id);
    res.success(profile);
  } catch (error) {
    next(error);
  }
});

router.post(
  '/',
  authorize,
  ...profileValidations,
  async (req: Request<any, any, IProfile>, res, next) => {
    try {
      const profile = await services.profile.makeProfile(
        req.user!.id,
        req.body
      );
      res.success(profile);
    } catch (error) {
      next(error);
    }
  }
);

export default router;
