import { IUser } from '../../models/User';
import gravatar from 'gravatar';
import crypt from 'bcryptjs';
import authService from '../auth';
import { BadRequest } from '../../utils/error';
import repos from '../../repositories';
import services from '..';

export type TCreateUserParams = Pick<IUser, 'name' | 'email' | 'password'>;

export default class UserService {
  async createUser(params: TCreateUserParams) {
    const { email, name, password } = params;

    const isUserExist = await repos.user.isExist(email);
    if (isUserExist) {
      throw new BadRequest('User already exist');
    }

    const avatar = gravatar.url(email, {
      s: '200',
      r: 'pg',
      d: 'mm',
    });

    const toSave = {
      name,
      email,
      avatar,
      password,
    };

    const salt = await crypt.genSalt(10);
    toSave.password = await crypt.hash(password, salt);

    const user = await repos.user.save(toSave);
    const token = await services.auth.sign(user.id);

    return {
      token,
      user,
    };
  }

  async getCurrentUser(id: string) {
    const user = await repos.user.get(id);
    return user;
  }
}
