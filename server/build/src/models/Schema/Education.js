'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var db_1 = __importDefault(require('../../utils/db'));
var EducationSchema = db_1.default.Schema({
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
exports.default = EducationSchema;
