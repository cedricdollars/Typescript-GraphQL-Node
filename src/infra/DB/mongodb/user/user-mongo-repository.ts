import { CreateUserAccountRepository } from "../../../../data/protocols/user/create-account-repository";
import { AccountCredentials } from "../../../../domain/usesCases/users/create-account";

/**
 * TODO
 * implementating interface UserAuthenticationRepository
 */

export class UserMongoRepository implements CreateUserAccountRepository {
  register(newUser: AccountCredentials): Promise<AccountCredentials> {
    throw new Error("Method not implemented.");
  }
}
