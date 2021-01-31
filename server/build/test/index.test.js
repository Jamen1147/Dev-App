'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var app_1 = __importDefault(require('../src/app'));
var supertest_1 = __importDefault(require('supertest'));
var request = supertest_1.default(app_1.default);
describe('testing app', function () {
  it('should return 404', function (done) {
    request.get('/api').expect(404, done);
  });
});
// TODO: Fix this -> Cannot use import statement outside a module
