import { AddEventRepository } from "../../../../data/protocols/event/add-event-repository";
import { LoadEventRepository } from "../../../../data/protocols/event/load-event-repository";
import Event from "../../../../domain/entities/event/event";

//TODO
export class EventMongoRepository
  implements AddEventRepository, LoadEventRepository {
  async save(event: Event): Promise<void> {}
  async load(id: number): Promise<Event> {}
  async getAll(): Promise<Event[]> {}
}
