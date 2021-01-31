'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var jsonwebtoken_1 = __importDefault(require('jsonwebtoken'));
var config_1 = __importDefault(require('config'));
var error_1 = require('../utils/error');
var authorize = function (req, res, next) {
  try {
    var token = req.header('x-auth-token');
    if (!token) {
      throw new error_1.Unthorized('Unthorized');
    }
    var decoded = jsonwebtoken_1.default.verify(
      token,
      config_1.default.jwt.secret
    );
    // @ts-expect-error
    req.user = decoded.user;
    next();
  } catch (error) {
    next(new error_1.Unthorized('Invalid token or token has been expired'));
  }
};
exports.default = authorize;
