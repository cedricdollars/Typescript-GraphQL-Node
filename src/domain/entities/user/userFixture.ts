import { User } from "./user";
import faker = require("faker");
import { TypeEvent } from "../../kind";

export type UserParams = {
  firstname: string;
  lastname: string;
  pseudo?: string;
  email: string;
  password: string;
};

export const UserFixture = (): User => {
  return {
    id: faker.random.words(5),
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    email: faker.internet.email(),
    pseudo: faker.name.findName(),
    password: faker.internet.password(),
    events: [
      {
        id: faker.random.uuid(),
        type: TypeEvent.conference,
        name: faker.random.word(),
        date: faker.date.recent(),
        duration: faker.random.number(30),
        location: faker.address.city(),
      },
    ],
  };
};
export const AuthenticateFixture = (): UserParams => {
  return {
    firstname: faker.name.firstName(),
    lastname: faker.name.lastName(),
    pseudo: faker.name.findName(),
    email: faker.internet.email(),
    password: faker.internet.password(),
  };
};
