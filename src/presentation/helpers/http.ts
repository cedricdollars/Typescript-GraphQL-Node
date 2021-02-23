import { httpResponse } from "../protocols";
import { UnauthorizedError } from "../errors/unauthorized-error";
import { ServerError } from "../errors/server-error";

export const badRequest = (error: Error): httpResponse => ({
  statusCode: 400,
  body: error,
});
export const forbiden = (error: Error): httpResponse => ({
  statusCode: 403,
  body: error,
});
export const unauthorized = (): httpResponse => ({
  statusCode: 401,
  body: new UnauthorizedError(),
});

export const serverError = (eror: Error): httpResponse => ({
  statusCode: 500,
  body: new ServerError(eror.message),
});
export const done = (info: any): httpResponse => ({
  statusCode: 200,
  body: info,
});
export const noContent = (): httpResponse => ({
  statusCode: 204,
  body: null,
});
