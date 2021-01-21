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
    type: Type!
    name: String!
    duration: Int!
    date: Date!
  }
  extend type Query {
    events: [Event]
  }
  extend type Mutation {
      save(type: Type!, name:String!, duration: Int!, date: Date!): Event!
  }
`;
