import { httpResponse } from "../protocols";
import { Controller } from "../protocols/controller";
//TODO

export class AuthenticationController implements Controller {
  handle(request: any): Promise<httpResponse> {
    throw new Error("Method not implemented.");
  }
}
