import { AccountCredentials } from "@/domain/usesCases/users/create-account";

export interface CreateUserAccountRepository {
  createAccount(newUser: AccountCredentials): Promise<result>;
}

export type result = boolean;
