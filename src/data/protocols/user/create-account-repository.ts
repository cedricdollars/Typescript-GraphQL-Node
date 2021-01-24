import { AccountCredentials } from "../../../domain/usesCases/users/create-account";
export interface CreateUserAccountRepository {
  register(
    newUser: AccountCredentialsRepository
  ): Promise<AccountCredentialsRepository>;
}

export type AccountCredentialsRepository = AccountCredentials;
