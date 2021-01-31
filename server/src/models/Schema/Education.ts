import DB from '../../utils/db';

export interface IEducation {
  school: string;
  degree: string;
  fieldofstudy: string;
  from: string;
  current: boolean;
  to?: string;
  description?: string;
}

const EducationSchema = DB.Schema({
  school: {
    type: String,
    required: true,
  },
  degree: {
    type: String,
    required: true,
  },
  fieldofstudy: {
    type: String,
    required: true,
  },
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

export default EducationSchema;
