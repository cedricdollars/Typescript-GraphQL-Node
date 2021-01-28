import { AddEventMemory } from "@/data/useCases/event/add-event";
import { AddEvent } from "../../../domain/usesCases/events/addEvent";
import { EventMongoRepository } from "../../../infra/DB/mongodb/event/event-mongo-repository";

export const makeDbAddEvent = (): AddEvent => {
  const eventMongoRepository = new EventMongoRepository();
  return new AddEventMemory(eventMongoRepository);
};
