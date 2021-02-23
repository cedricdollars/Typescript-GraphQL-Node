import { ApolloServer } from "apollo-server-express";
import resolvers from "../../../src/main/graphql/resolvers";
import typeDefs from "../../../src/main/graphql/typeDefs";

export const makeApolloServer = (): ApolloServer =>
  new ApolloServer({
    resolvers: resolvers,
    typeDefs,
    context: ({ req }) => ({ req }),
  });
