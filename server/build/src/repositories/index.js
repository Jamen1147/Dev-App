'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var Profile_1 = __importDefault(require('../models/Profile'));
var User_1 = __importDefault(require('../models/User'));
var profileRepo_1 = __importDefault(require('./profileRepo'));
var userRepo_1 = __importDefault(require('./userRepo'));
var Repositories = /** @class */ (function () {
  function Repositories() {
    this.profile = new profileRepo_1.default(Profile_1.default);
    this.user = new userRepo_1.default(User_1.default);
  }
  return Repositories;
})();
var repos = new Repositories();
exports.default = repos;
