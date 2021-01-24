import faker from "faker";

import { AccountCredentials } from "../../../src/domain/usesCases/users/create-account";
import { UserAccount } from "../../../src/domain/usesCases/users/authentication";

export const mockCreateUserAccount = (): AccountCredentials => ({
  firstname: faker.name.firstName(),
  lastname: faker.name.lastName(),
  email: faker.internet.email(),
  pseudo: faker.name.findName(),
  password: faker.internet.password(),
});

export const mockUserAuthentication = (): UserAccount => ({
  email: faker.internet.email(),
  password: faker.internet.password(),
});
