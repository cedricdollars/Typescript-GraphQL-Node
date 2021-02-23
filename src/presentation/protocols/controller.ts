import { httpResponse } from "./http";

export interface Controller<T = any> {
  handle(request: T): Promise<httpResponse>;
}
