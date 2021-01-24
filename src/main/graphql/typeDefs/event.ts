import { gql } from "apollo-server-koa";
import { GraphQLScalarType } from "graphql";

export default gql`
  scalar Date

  enum Type {
    MEETUP
    EXPOSITION
    WOKRSHOP
    CONF
    GALA
  }
  type Event {
    id: ID!
    type: Type!
    name: String!
    duration: Int!
    date: Date!
    location: String!
  }
  extend type Query {
    oneEvent(id: ID!): Event
    allEvent: [Event]
  }
  extend type Mutation {
    save(
      type: Type!
      name: String!
      duration: Int!
      date: Date!
      location: String
    ): Event!
  }
`;
