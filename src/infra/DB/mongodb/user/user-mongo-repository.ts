import { CreateUserAccountRepository } from "@/data/protocols/user/create-account-repository";
import {
  AccountCredentials,
  result,
} from "@/domain/usesCases/users/create-account";
import { MongodbHelper } from "../../helpers/mongodb";

import {
  UpdateAccessTokenRepository,
  CheckEmailAccountRepository,
  LoadByAccountByEmailRepository,
  UserResult,
} from "@/data/protocols/";

/**
 * TODO
 * implementating interface UserAuthenticationRepository
 */

export class UserMongoRepository
  implements
    CreateUserAccountRepository,
    LoadByAccountByEmailRepository,
    CheckEmailAccountRepository,
    UpdateAccessTokenRepository {
  async checkByEmail(email: string): Promise<boolean> {
    const accountCollection = await MongodbHelper.getCollection("users");
    const result = await accountCollection.findOne(
      { email },
      { projection: { _id: 1 } }
    );
    return result !== null;
  }
  async loadByEmail(email: string): Promise<UserResult> {
    const accountCollection = await MongodbHelper.getCollection("users");
    const account = await accountCollection.findOne({ email });
    return account;
  }
  async createAccount(newUser: AccountCredentials): Promise<result> {
    const userCollection = await MongodbHelper.getCollection("users");
    const result = await userCollection.insertOne(newUser);

    return result !== null;
  }
  async updateAccessToken(_id: string, token: string): Promise<void> {
    const accountCollection = await MongodbHelper.getCollection("users");
    await accountCollection.updateOne(
      { _id },
      {
        $set: {
          accessToken: token,
        },
      }
    );
  }
}
