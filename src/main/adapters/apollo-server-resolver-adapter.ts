import { Controller } from "../../presentation/protocols/controller";
import {
  UserInputError,
  AuthenticationError,
  ForbiddenError,
  ApolloServer,
} from "apollo-server-koa";

export const adapterResolver = async (
  controller: Controller,
  agrs?: any,
  context?: any
) => {
  const request = {
    ...(agrs || {}),
    accountId: context?.req?.accountId,
  };
  const response = await controller.handle(request);
  switch (response.statusCode) {
    case 200:
    case 204:
      return response.body;
    case 400:
      throw new UserInputError(response.body.message);
    case 401:
      throw new AuthenticationError(response.body.message);
    case 403:
      throw new ForbiddenError(response.body.message);
    default:
      new ApolloServer(response.body.message);
  }
};
