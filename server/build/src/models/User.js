'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var mongoose_1 = require('mongoose');
var db_1 = __importDefault(require('../utils/db'));
var UserSchema = db_1.default.Schema(
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
      transform: function (_, ret) {
        delete ret._id;
        delete ret.password;
      },
    },
  }
);
var User = mongoose_1.model('user', UserSchema);
exports.default = User;
