import { IUser } from '../models/User';
import RepositoryBase from './baseRepo';

export default class UserRepo extends RepositoryBase<IUser> {
  getByEmail(email: string) {
    return this.getByQuery({ email });
  }

  async isExist(email: string) {
    const exist = await this.getByEmail(email);
    return !!exist;
  }
}
