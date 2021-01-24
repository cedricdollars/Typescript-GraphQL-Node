import { ApolloServer } from "apollo-server-koa";
import typeDefs from "../main/graphql/typeDefs";
import resolvers from "../main/graphql/resolvers";

import { GraphQLError } from "graphql";
import Koa from "koa";

// const handleErrors = (response: any, errors: readonly GraphQLError[]): void => {
//     errors?.forEach(error => {
//       response.data = undefined
//       if (checkError(error, 'UserInputError')) {
//         response.http.status = 400
//       } else if (checkError(error, 'AuthenticationError')) {
//         response.http.status = 401
//       } else if (checkError(error, 'ForbiddenError')) {
//         response.http.status = 403
//       } else {
//         response.http.status = 500
//       }
//     })
//   }
//   const checkError = (error: GraphQLError, errorName: string): boolean => {
//     return [error.name, error.originalError?.name].some(name => name === errorName)
//   }
export default (app: Koa): void => {
  const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: ({ req }) => ({ req }),
    plugins: [
      {
        serverWillStart: () => console.info("Server starting..."),
      },
    ],
  });
  server.applyMiddleware({ app });
};
