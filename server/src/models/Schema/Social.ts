import DB from '../../utils/db';

export interface ISocial {
  youtube?: string;
  twitter?: string;
  facebook?: string;
  linkedin?: string;
  instagram?: string;
}

const SocialSchema = DB.Schema({
  youtube: String,
  twitter: String,
  facebook: String,
  linkedin: String,
  instagram: String,
});

export default SocialSchema;
