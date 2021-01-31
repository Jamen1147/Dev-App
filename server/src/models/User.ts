import { model, Document } from 'mongoose';
import DB from '../utils/db';

export interface IUser extends Document {
  name: string;
  password: string;
  email: string;
  id: string;
  date?: string;
  avatar?: string;
}

const UserSchema = DB.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    avatar: String,
    date: {
      type: Date,
      default: Date.now,
    },
  },
  {
    toJSON: {
      virtuals: true,
      versionKey: false,
      transform: (_: any, ret: any) => {
        delete ret._id;
        delete ret.password;
      },
    },
  }
);

const User = model<IUser>('user', UserSchema);

export default User;
