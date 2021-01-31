'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var mongoose_1 = require('mongoose');
var db_1 = __importDefault(require('../utils/db'));
var Education_1 = __importDefault(require('./Schema/Education'));
var Experience_1 = __importDefault(require('./Schema/Experience'));
var Social_1 = __importDefault(require('./Schema/Social'));
var ProfileSchema = db_1.default.Schema({
  user: {
    type: mongoose_1.Schema.Types.ObjectId,
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
  experience: [Experience_1.default],
  education: [Education_1.default],
  social: Social_1.default,
});
var Profile = mongoose_1.model('profile', ProfileSchema);
exports.default = Profile;
