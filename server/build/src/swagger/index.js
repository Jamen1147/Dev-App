'use strict';
var __importDefault =
  (this && this.__importDefault) ||
  function (mod) {
    return mod && mod.__esModule ? mod : { default: mod };
  };
Object.defineProperty(exports, '__esModule', { value: true });
var swagger_jsdoc_1 = __importDefault(require('swagger-jsdoc'));
var swagger_ui_express_1 = __importDefault(require('swagger-ui-express'));
var swaggerOptions = {
  swaggerDefinition: {
    openapi: '3.0.0',
    info: {
      title: 'Test',
      version: '1.0.0',
    },
  },
  apis: ['./src/routes/**/*.ts', './src/swagger/*.yml'],
};
var swaggerDocs = swagger_jsdoc_1.default(swaggerOptions);
var swaggerSetups = [
  swagger_ui_express_1.default.serve,
  swagger_ui_express_1.default.setup(swaggerDocs),
];
exports.default = swaggerSetups;
