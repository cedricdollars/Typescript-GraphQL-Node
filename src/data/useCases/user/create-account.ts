import {
  AccountCredentials,
  CreateAccount,
} from "../../../domain/usesCases/users/create-account";
import { CreateUserAccountRepository } from "../../protocols/user/create-account-repository";
import { CheckEmailAccountRepository } from "../../protocols/validators/check-email-account-repository";
import bcrypt from "bcrypt";

export class CreateUserAccountMemory implements CreateAccount {
  constructor(
    private userAccount: CreateUserAccountRepository,
    private checkbyEmail: CheckEmailAccountRepository
  ) {}
  async register(newAccount: AccountCredentials): Promise<AccountCredentials> {
    const exits = await this.checkbyEmail.checkExistsEmail(newAccount.email);
    let newUser;
    if (!exits) {
      const hashedPassword = await bcrypt.hash(newAccount.password, 10);
      return (newUser = await this.userAccount.register({
        ...newAccount,
        password: hashedPassword,
      }));
    }
    return newAccount;
  }
}
