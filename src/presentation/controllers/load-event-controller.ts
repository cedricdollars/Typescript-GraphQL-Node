import { Controller, httpResponse } from "../protocols/controller";
import { LoadEvent } from "../../domain/usesCases/events/loadEvent";

export class LoadEventController implements Controller {
  private readonly loadEvent: LoadEvent;
  constructor(loadEvent: LoadEvent) {
    this.loadEvent = loadEvent;
  }
  async handle(request: Request): Promise<httpResponse> {
    const events = await this.loadEvent.load(request.accountId);
  }
}

export type Request = {
  accountId: string;
};
