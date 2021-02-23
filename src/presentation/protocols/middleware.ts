import { httpResponse } from "./http";

export interface Middleware<T = any> {
  handle(request: T): Promise<httpResponse>;
}
