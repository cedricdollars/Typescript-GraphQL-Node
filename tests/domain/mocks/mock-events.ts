import faker from "faker";
import Event from "../../../src/domain/entities/event/event";
import { uuid } from "../../../src/domain/helper/uuid";
import { TypeEvent } from "../../../src/domain/kind";

export const mockAddEvent = (): Event => {
  return {
    id: uuid(),
    type: TypeEvent.exposition,
    name: faker.random.words(10),
    duration: faker.random.number(),
    location: faker.address.city(),
    date: faker.date.recent(),
  };
};
