import Profile, { IProfile } from '../../models/Profile';
import repos from '../../repositories';
import { BadRequest } from '../../utils/error';

export default class ProfileService {
  async makeProfile(uid: string, params: IProfile) {
    let profile: IProfile = await repos.profile.getByQuery({
      user: uid as any,
    });
    if (profile) {
      profile = await repos.profile.updateByQuery(
        { user: uid as any },
        params,
        { new: true }
      );
    } else {
      profile = await repos.profile.save({
        ...params,
        user: uid as any,
      });
    }
    return profile;
  }

  async getMyProfile(uid: string) {
    const profile = await repos.profile
      .getByQuery({ user: uid as any })
      .populate('user', 'name avatar');

    if (!profile) {
      throw new BadRequest('There is no profile for this user');
    }

    return profile;
  }
}
