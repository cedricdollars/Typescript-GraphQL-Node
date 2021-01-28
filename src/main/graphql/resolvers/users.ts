import { CreateUserAccountMemory } from "@/data/useCases/user/create-account";
import { CheckEmailAccountMongoRepository } from "@/infra/DB/mongodb/user/check-email-account-mongo-repo";
import { UserMongoRepository } from "@/infra/DB/mongodb/user/user-mongo-repository";

export default {
  Query: {
    login: async (parent: any, args: any) => {
      //TODO
    },
  },
  Mutation: {
    signUp: async (parents: any, args: any) => {
      const userMongoRepo = new UserMongoRepository();
      const exist = new CheckEmailAccountMongoRepository(args.email);
      const newUser = new CreateUserAccountMemory(userMongoRepo, exist);
      return newUser.createAccount(args);
    },
  },
};
