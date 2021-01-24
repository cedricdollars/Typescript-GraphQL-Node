export interface Middleware<T = any> {
  handle(request: T): Promise<httpResponse.httpResponse>;
}
namespace httpResponse {
  export type httpResponse = {
    statusCode: number;
    body: any;
  };
}
