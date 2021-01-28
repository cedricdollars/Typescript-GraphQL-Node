import { AddEvent } from "../../domain/usesCases/events/addEvent";
import { httpResponse } from "../protocols";
import { Controller } from "../protocols/controller";
import Event from "../../domain/entities/event/event";
import { Validation } from "../protocols/validation";
import { badRequest, noContent, serverError } from "../helpers/http";

export class AddEventController implements Controller {
  constructor(
    private addEventController: AddEvent,
    private validation: Validation
  ) {}
  async handle(request: Event): Promise<httpResponse> {
    try {
      const error = this.validation.validate(request);
      if (error) {
        return badRequest(error);
      }
      await this.addEventController.save(request);
      return noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}
