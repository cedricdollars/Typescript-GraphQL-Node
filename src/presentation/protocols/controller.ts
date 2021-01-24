export interface Controller<T = any> {
  handle(request: T): Promise<httpResponse>;
}

export type httpResponse = {
  statusCode: number;
  body: any;
};
