import { CreateUserAccountRepository } from "@/data/protocols/user/create-account-repository";
import {
  AccountCredentials,
  result,
} from "@/domain/usesCases/users/create-account";
import { MongodbHelper } from "../../helpers/mongodb";
import { LoadByAccountByEmailRepository } from "../../../../data/protocols/user/load-by-email-account-repository";
import { CheckEmailAccountRepository } from "../../../../data/protocols/user/check-email-account-repository";

/**
 * TODO
 * implementating interface UserAuthenticationRepository
 */

export class UserMongoRepository
  implements
    CreateUserAccountRepository,
    LoadByAccountByEmailRepository,
    CheckEmailAccountRepository {
  async checkByEmail(email: string): Promise<boolean> {
    const accountCollection = await MongodbHelper.getCollection("users");
    const result = await accountCollection.findOne(
      { email },
      { projection: { _id: 1 } }
    );
    return result !== null;
  }
  async loadByEmail(email: string): Promise<AccountCredentials> {
    const accountCollection = await MongodbHelper.getCollection("users");
    const account = await accountCollection.findOne({ email });
    return account;
  }
  async createAccount(newUser: AccountCredentials): Promise<result> {
    const userCollection = await MongodbHelper.getCollection("users");
    const result = await userCollection.insertOne(newUser);

    return result !== null;
  }
}
