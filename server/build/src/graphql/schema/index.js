'use strict';
var __makeTemplateObject =
  (this && this.__makeTemplateObject) ||
  function (cooked, raw) {
    if (Object.defineProperty) {
      Object.defineProperty(cooked, 'raw', { value: raw });
    } else {
      cooked.raw = raw;
    }
    return cooked;
  };
Object.defineProperty(exports, '__esModule', { value: true });
var apollo_server_express_1 = require('apollo-server-express');
var typeDefs = apollo_server_express_1.gql(
  templateObject_1 ||
    (templateObject_1 = __makeTemplateObject(
      [
        '\n  type User {\n    id: ID!\n    name: String!\n    email: String!\n    avatar: String\n    date: String\n  }\n\n  input UserInput {\n    name: String!\n    email: String!\n    password: String!\n  }\n\n  type Query {\n    user: User\n    hi: String\n  }\n\n  type Mutation {\n    createUser(user:UserInput): User\n  }\n\n  schema {\n    query: Query\n    mutation: Mutation\n  }\n',
      ],
      [
        '\n  type User {\n    id: ID!\n    name: String!\n    email: String!\n    avatar: String\n    date: String\n  }\n\n  input UserInput {\n    name: String!\n    email: String!\n    password: String!\n  }\n\n  type Query {\n    user: User\n    hi: String\n  }\n\n  type Mutation {\n    createUser(user:UserInput): User\n  }\n\n  schema {\n    query: Query\n    mutation: Mutation\n  }\n',
      ]
    ))
);
exports.default = typeDefs;
var templateObject_1;
