import { gql } from "apollo-server-koa";

export default gql`
  type User {
    id: ID!
    firstname: String!
    lastname: String!
    email: String!
    password: String!
    pseudo: String
    event: [Event]
  }
  extend type Query {
    login(email: String!, password: String!): User
  }
  extend type Mutation {
      signUp(pseudo:String, firstname:String!, lastname:String!, email:String!, password:String!):User
  }
`;
