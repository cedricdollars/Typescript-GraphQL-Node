import { LoadEventMemory } from "@/data/useCases/event/load-event";
import { LoadEvent } from "@/domain/usesCases/events/loadEvent";
import { EventMongoRepository } from "@/infra/DB/mongodb/event/event-mongo-repository";

export const makeDbLoadEvent = (): LoadEvent => {
  const eventMongoRepository = new EventMongoRepository();
  return new LoadEventMemory(eventMongoRepository);
};
