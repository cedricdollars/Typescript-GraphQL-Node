import { ApolloServer } from "apollo-server-express";
import typeDefs from "../graphql/typeDefs";
import resolvers from "../graphql/resolvers";

import { Express } from "express";

export default (app: Express): void => {
  const server = new ApolloServer({
    resolvers,
    typeDefs: typeDefs,
    context: ({ req }) => ({ req }),
    playground: {
      endpoint: "/graphql",
    },
  });

  server.applyMiddleware({ app });
  app.listen(4000, () => {
    `Apollo server is running at http://localhost:4000/graphql`;
  });
};
