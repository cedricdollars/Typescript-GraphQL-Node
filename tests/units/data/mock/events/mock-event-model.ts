import faker, { date, random } from "faker";
import Event from "../../../../../src/domain/entities/event/event";
import { TypeEvent } from "../../../../../src/domain/kind";

export const mockOneEvent = (): Event => {
  return {
    _id: faker.random.uuid(),
    type: TypeEvent.conference,
    name: faker.random.word(),
    duration: faker.random.number(100),
    date: date.recent(),
    location: faker.address.city(),
  };
};
export const mockEvents = (): Event[] => {
  return [mockOneEvent(), mockOneEvent()];
};
