import { CreateUserAccountMemory } from "@/data/useCases/user/create-account";
import { UserMongoRepository } from "@/infra/DB/mongodb/user/user-mongo-repository";

export default {
  Query: {
    authentication: async (parent: any, args: any) => {
      //TODO
    },
  },
  Mutation: {
    registration: async (parents: any, args: any, ctx: any) => {
      const { pseudo, firstname, lastname, email, password } = args;
      const userMongoRepo = new UserMongoRepository();
      const newUser = new CreateUserAccountMemory(userMongoRepo, userMongoRepo);
      const result = await newUser.createAccount({
        pseudo,
        firstname,
        lastname,
        email,
        password,
      });

      return result;
    },
  },
};
