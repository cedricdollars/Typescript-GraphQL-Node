import { gql } from "apollo-server-express";
import { GraphQLScalarType } from "graphql";

export default gql`
  scalar DateTime

  enum Type {
    MEETUP
    EXPOSITION
    WOKRSHOP
    CONF
    GALA
  }
  type Event {
    _id: ID!
    type: Type!
    name: String!
    duration: Int!
    date: DateTime!
    location: String!
  }
  extend type Query {
    getOne(_id: ID!): Event
    getAll: [Event]
  }
  extend type Mutation {
    save(
      type: Type!
      name: String!
      duration: Int!
      date: DateTime!
      location: String
    ): Event!
  }
`;
