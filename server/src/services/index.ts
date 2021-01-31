import AuthService from './auth';
import ProfileService from './profile';
import UserService from './user';

class ContextServices {
  auth: AuthService;
  profile: ProfileService;
  user: UserService;
  constructor() {
    this.auth = new AuthService();
    this.profile = new ProfileService();
    this.user = new UserService();
  }
}

const services = new ContextServices();
export default services;
