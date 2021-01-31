'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var db_1 = __importDefault(require('../../utils/db'));
var SocialSchema = db_1.default.Schema({
  youtube: String,
  twitter: String,
  facebook: String,
  linkedin: String,
  instagram: String,
});
exports.default = SocialSchema;
