import Event from "../../../domain/entities/event/event";
import { addEvent } from "../../../domain/usesCases/events/addEvent";
import { AddEventRepository } from "../../protocols/event/add-event-repository";

export class AddEventMemory implements addEvent {
  constructor(private addEventRepository: AddEventRepository) {}

  async save(event: Event) {
    await this.addEventRepository.save(event);
  }
}
