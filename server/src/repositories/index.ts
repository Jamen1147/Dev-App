import Profile from '../models/Profile';
import User from '../models/User';
import ProfileRepo from './profileRepo';
import UserRepo from './userRepo';

class Repositories {
  readonly profile: ProfileRepo;
  readonly user: UserRepo;
  constructor() {
    this.profile = new ProfileRepo(Profile);
    this.user = new UserRepo(User);
  }
}

const repos = new Repositories();
export default repos;
