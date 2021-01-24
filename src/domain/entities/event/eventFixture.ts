import faker = require("faker");
import Event from "./event";
import { TypeEvent } from "../../kind";

export const eventFixture = (): Event => {
  return {
    id: faker.random.uuid(),
    type: TypeEvent.conference,
    name: faker.random.words(5),
    date: faker.date.recent(),
    duration: faker.random.number(),
    location: faker.address.city(),
  };
};
