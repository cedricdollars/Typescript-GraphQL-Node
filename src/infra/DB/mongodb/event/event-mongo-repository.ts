import { AddEventRepository } from "../../../../data/protocols/event/add-event-repository";
import { LoadEventRepository } from "../../../../data/protocols/event/load-event-repository";
import { MongodbHelper } from "../../helpers/mongodb";
import { ObjectId } from "mongodb";
import Event from "../../../../domain/entities/event/event";

export class EventMongoRepository
  implements AddEventRepository, LoadEventRepository {
  async save(event: Event): Promise<void> {
    const eventCollection = await MongodbHelper.getCollection("events");
    await eventCollection.insertOne(event);
  }
  async load(id: string): Promise<Event> {
    const eventCollection = await MongodbHelper.getCollection("events");
    const event = await eventCollection.findOne({ _id: new ObjectId(id) });
    return event;
  }
  async getAll(): Promise<Event[]> {
    const eventCollection = await MongodbHelper.getCollection("events");
    return await eventCollection.find().toArray();
  }
}
