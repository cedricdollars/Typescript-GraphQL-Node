import { gql } from "apollo-server-express";

export default gql`
  type User {
    _id: ID!
    pseudo: String
    firstname: String!
    lastname: String!
    email: String!
    password: String!
  }
  extend type Query {
    authentication(email: String!, password: String!): Token!
  }
  extend type Mutation {
    registration(
      pseudo: String
      firstname: String!
      lastname: String!
      email: String!
      password: String!
    ): Boolean!
  }
  type Account {
    pseudo: String
    firstname: String!
    lastname: String!
    email: String!
    password: String!
  }
  type Token {
    accessToken: String!
    lastname: String!
  }
`;
