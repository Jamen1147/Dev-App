'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var auth_1 = __importDefault(require('./auth'));
var profile_1 = __importDefault(require('./profile'));
var user_1 = __importDefault(require('./user'));
var ContextServices = /** @class */ (function () {
  function ContextServices() {
    this.auth = new auth_1.default();
    this.profile = new profile_1.default();
    this.user = new user_1.default();
  }
  return ContextServices;
})();
var services = new ContextServices();
exports.default = services;
