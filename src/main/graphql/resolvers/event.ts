import { AddEventMemory } from "@/data/useCases/event/add-event";
import { LoadEventMemory } from "@/data/useCases/event/load-event";
import { EventMongoRepository } from "@/infra/DB/mongodb/event/event-mongo-repository";

export default {
  Query: {
    getOne: async (parent: any, args: any, context: any) => {
      const eventtMongo = new EventMongoRepository();
      const loadEvent = new LoadEventMemory(eventtMongo);
      return loadEvent.load(args._id);
    },
    getAll: async () => {
      const eventtMongo = new EventMongoRepository();
      const allEvent = new LoadEventMemory(eventtMongo);
      return allEvent.getAll();
    },
  },
  Mutation: {
    save: async (parent: any, args: any, context: any) => {
      const eventMongoRepo = new EventMongoRepository();
      const event = new AddEventMemory(eventMongoRepo);
      return event.save(args);
    },
  },
};
