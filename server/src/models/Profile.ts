import { model, Document, Schema } from 'mongoose';
import DB from '../utils/db';
import EducationSchema, { IEducation } from './Schema/Education';
import ExperienceSchema, { IExperience } from './Schema/Experience';
import SocialSchema, { ISocial } from './Schema/Social';

export interface IProfile extends Document {
  user: Schema.Types.ObjectId;
  status: string;
  skills: string[];
  company?: string;
  website?: string;
  location?: string;
  bio?: string;
  githubusername?: string;
  experience?: IExperience[];
  education?: IEducation[];
  social?: ISocial;
}

const ProfileSchema = DB.Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user',
  },
  company: String,
  website: String,
  location: String,
  status: {
    type: String,
    required: true,
  },
  skills: {
    type: [String],
    required: true,
  },
  bio: String,
  githubusername: String,
  experience: [ExperienceSchema],
  education: [EducationSchema],
  social: SocialSchema,
});

const Profile = model<IProfile>('profile', ProfileSchema);

export default Profile;
