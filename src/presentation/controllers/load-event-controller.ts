import { Controller } from "../protocols/controller";
import { LoadEvent } from "../../domain/usesCases/events/loadEvent";
import { httpResponse } from "../protocols/http";
import { done, noContent, serverError } from "../helpers/http";

export class LoadEventController implements Controller {
  private readonly loadEvent: LoadEvent;
  constructor(loadEvent: LoadEvent) {
    this.loadEvent = loadEvent;
  }
  async handle(request: Request): Promise<httpResponse> {
    try {
      const events = await this.loadEvent.load(request.accountId);
      return events?.name ? done(events) : noContent();
    } catch (error) {
      return serverError(error);
    }
  }
}

export type Request = {
  accountId: string;
};
