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
  type Params {
    type: Type!
    name: String!
    duration: Int!
    date: DateTime
    location: String!
  }
  type Event {
    _id: ID!
    type: Type!
    name: String!
    duration: Int!
    date: DateTime
    location: String!
  }
  extend type Query {
    loadOne(_id: ID!): Event
    loadAll: [Event]
  }
  extend type Mutation {
    save(
      type: Type!
      name: String!
      duration: Int!
      date: DateTime
      location: String
    ): Params
  }
`;
