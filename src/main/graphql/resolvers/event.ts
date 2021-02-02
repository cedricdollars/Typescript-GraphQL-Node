import { AddEventMemory } from "@/data/useCases/event/add-event";
import { LoadEventMemory } from "@/data/useCases/event/load-event";
import { EventMongoRepository } from "@/infra/DB/mongodb/event/event-mongo-repository";
import { NoDataError } from "../../../presentation/errors/no-data-error";

export default {
  Query: {
    loadOne: async (parent: any, { _id }: any, context: any) => {
      const eventtMongo = new EventMongoRepository();
      const loadEvent = new LoadEventMemory(eventtMongo);
      const result = await loadEvent.load(_id);
      if (result !== null) {
        return result;
      }
      return new NoDataError();
    },
    loadAll: async () => {
      const eventtMongo = new EventMongoRepository();
      const allEvent = new LoadEventMemory(eventtMongo);
      return await allEvent.getAll();
    },
  },
  Mutation: {
    save: async (parent: any, args: any, context: any) => {
      const eventMongoRepo = new EventMongoRepository();
      const event = new AddEventMemory(eventMongoRepo);
      const result = await event.save(args);
      console.log(result);
    },
  },
};
