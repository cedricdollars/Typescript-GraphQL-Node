import { EventMongoRepository } from "../../infra/DB/mongodb/event/event-mongo-repository";
import { LoadEventMemory } from "../../data/useCases/event/load-event";
import Event from "../../domain/entities/event/event";
import { Params } from "../../domain/usesCases/events/addEvent";
import { AddEventMemory } from "../../data/useCases/event/add-event";

export class LoadEventController {
  async getOne(id: string): Promise<Event> {
    try {
      const repo = new EventMongoRepository();
      const loadEvent = new LoadEventMemory(repo);
      return loadEvent.load(id);
    } catch (error) {
      return error;
    }
  }
}

export class AddEventController {
  async save(event: Params): Promise<void> {
    try {
      const saveRepo = new EventMongoRepository();
      const result = new AddEventMemory(saveRepo);

      result.save(event);
    } catch (error) {
      return error;
    }
  }
}

export class LoadAllEventController {
  async getAll(): Promise<Event[]> {
    try {
      const repo = new EventMongoRepository();
      const data = new LoadEventMemory(repo);
      return data.getAll();
    } catch (error) {
      return error;
    }
  }
}
