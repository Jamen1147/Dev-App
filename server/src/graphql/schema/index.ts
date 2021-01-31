import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: ID!
    name: String!
    email: String!
    avatar: String
    date: String
  }

  input UserInput {
    name: String!
    email: String!
    password: String!
  }

  type Query {
    user: User
    hi: String
  }

  type Mutation {
    createUser(user: UserInput): User
  }

  schema {
    query: Query
    mutation: Mutation
  }
`;

export default typeDefs;
