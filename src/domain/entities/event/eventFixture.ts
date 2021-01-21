import faker from "faker";
import Event from "./event";
import { TypeEvent } from "../../kind";

export const eventFixture = (): Event => {
  return {
    type: TypeEvent.conference,
    name: faker.random.words(5),
    date: faker.date.recent(),
    duration: faker.random.number(),
    location: faker.random.word(),
  };
};
