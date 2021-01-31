import DB from '../../utils/db';

export interface IExperience {
  title: string;
  company: string;
  from: string;
  current: boolean;
  location?: string;
  to?: string;
  description?: string;
}

const ExperienceSchema = DB.Schema({
  title: {
    type: String,
    required: true,
  },
  company: {
    type: String,
    required: true,
  },
  location: String,
  from: {
    type: Date,
    required: true,
  },
  to: Date,
  current: {
    type: Boolean,
    default: false,
  },
  description: String,
});

export default ExperienceSchema;
