"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_koa_1 = require("apollo-server-koa");
var typeDefs_1 = __importDefault(require("../main/graphql/typeDefs"));
var resolvers_1 = __importDefault(require("../main/graphql/resolvers"));
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
exports.default = (function (app) {
    var server = new apollo_server_koa_1.ApolloServer({
        resolvers: resolvers_1.default,
        typeDefs: typeDefs_1.default,
        context: function (_a) {
            var req = _a.req;
            return ({ req: req });
        },
        plugins: [
            {
                serverWillStart: function () { return console.info("Server starting..."); },
            },
        ],
    });
    server.applyMiddleware({ app: app });
});
