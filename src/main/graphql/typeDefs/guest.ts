import { gql } from "apollo-server-express";

export default gql`
  scalar Date

  type Guest {
    _id: ID!
    name: String!
    email: String!
  }
  extend type Query {
    guest(name: String!): Guest!
  }
  extend type Mutation {
    send(name: String!): ReturnedReceipt
  }
  type ReturnedReceipt {
    sender_date: Date
    isSend: Boolean
  }
`;
