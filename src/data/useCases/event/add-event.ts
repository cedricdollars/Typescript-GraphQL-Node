import { AddEvent, Params } from "@/domain/usesCases/events/addEvent";
import { AddEventRepository } from "../../protocols/event/add-event-repository";

export class AddEventMemory implements AddEvent {
  constructor(private addEventRepository: AddEventRepository) {}

  async save(event: Params): Promise<void> {
    await this.addEventRepository.save(event);
  }
}
