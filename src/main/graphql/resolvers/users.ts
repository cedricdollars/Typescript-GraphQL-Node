import { CreateUserAccountMemory } from "@/data/useCases/user/create-account";
import { UserMongoRepository } from "@/infra/DB/mongodb/user/user-mongo-repository";
import { JwtAdapter } from "../../../infra/crypto/jwt-adapter";
import { AuthenticationMemory } from "../../../data/useCases/user/authentication";
import { BcryptAdapter } from "../../../infra/crypto/bcrypt-adapter";

export default {
  Query: {
    authentication: async (parent: any, { email, password }: any) => {
      const jwtAdapter = new JwtAdapter(`${process.env.secret}`);
      const auth = new UserMongoRepository();
      const bcryptAdapter = new BcryptAdapter(10);
      const loggedIn = new AuthenticationMemory(
        auth,
        jwtAdapter,
        auth,
        bcryptAdapter
      );
      return loggedIn.authenticate({ email, password });
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
