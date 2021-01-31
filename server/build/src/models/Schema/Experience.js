'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var db_1 = __importDefault(require('../../utils/db'));
var ExperienceSchema = db_1.default.Schema({
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
exports.default = ExperienceSchema;
