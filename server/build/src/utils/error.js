'use strict';
var __extends =
  (this && this.__extends) ||
  (function () {
    var extendStatics = function (d, b) {
      extendStatics =
        Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return extendStatics(d, b);
    };
    return function (d, b) {
      extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    };
  })();
Object.defineProperty(exports, '__esModule', { value: true });
exports.NotFound = exports.Forbidden = exports.Unthorized = exports.BadRequest = exports.HttpError = void 0;
var HttpError = /** @class */ (function () {
  function HttpError(message) {
    var _newTarget = this.constructor;
    console.log(message);
    console.log(_newTarget);
    this.message = message;
  }
  HttpError.prototype.getCode = function () {
    return HttpError.StatusCode[this.constructor.name] || 500;
  };
  HttpError.StatusCode = {
    BadRequest: 400,
    Unthorized: 401,
    Forbidden: 403,
    NotFound: 404,
  };
  return HttpError;
})();
exports.HttpError = HttpError;
var BadRequest = /** @class */ (function (_super) {
  __extends(BadRequest, _super);
  function BadRequest() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  return BadRequest;
})(HttpError);
exports.BadRequest = BadRequest;
var Unthorized = /** @class */ (function (_super) {
  __extends(Unthorized, _super);
  function Unthorized() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  return Unthorized;
})(HttpError);
exports.Unthorized = Unthorized;
var Forbidden = /** @class */ (function (_super) {
  __extends(Forbidden, _super);
  function Forbidden() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  return Forbidden;
})(HttpError);
exports.Forbidden = Forbidden;
var NotFound = /** @class */ (function (_super) {
  __extends(NotFound, _super);
  function NotFound() {
    return (_super !== null && _super.apply(this, arguments)) || this;
  }
  return NotFound;
})(HttpError);
exports.NotFound = NotFound;
