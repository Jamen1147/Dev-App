import jwt from 'jsonwebtoken';
import config from 'config';
import crypt from 'bcryptjs';
import { BadRequest } from '../../utils/error';
import { IUser } from '../../models/User';
import repos from '../../repositories';

export type TLoginParams = Pick<IUser, 'email' | 'password'>;

export default class AuthService {
  async sign(id: string, expiresIn = 360000) {
    const token = await new Promise<string>((resolve, reject) => {
      jwt.sign(
        {
          user: {
            id,
          },
        },
        config.jwt.secret,
        { expiresIn },
        (err, token) => {
          if (err) reject(err);
          if (token) {
            resolve(token);
          } else {
            reject('Signed but no token');
          }
        }
      );
    });
    return token;
  }

  async login(params: TLoginParams) {
    const { email, password } = params;

    const user = await repos.user.getByEmail(email);
    if (!user) throw new BadRequest('Invalid Credentials');

    const matched = await this.checkPassword(password, user.password);
    if (!matched) throw new BadRequest('Invalid Credentials');

    const token = await this.sign(user.id);

    return {
      user,
      token,
    };
  }

  private async checkPassword(password: string, hashed: string) {
    const matched = await crypt.compare(password, hashed);
    return matched;
  }
}
