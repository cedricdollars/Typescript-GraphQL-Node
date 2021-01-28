import {
  AccountCredentials,
  CreateAccount,
} from "@/domain/usesCases/users/create-account";
import { CreateUserAccountRepository } from "../../protocols/user/create-account-repository";
import { CheckEmailAccountRepository } from "../../protocols/user/check-email-account-repository";
import bcrypt from "bcrypt";
import { result } from "../../../domain/usesCases/users/create-account";

export class CreateUserAccountMemory implements CreateAccount {
  constructor(
    private userAccount: CreateUserAccountRepository,
    private checkEmailAccountRepository: CheckEmailAccountRepository
  ) {}
  async createAccount(newAccount: AccountCredentials): Promise<result> {
    const exists = await this.checkEmailAccountRepository.checkByEmail(
      newAccount.email
    );
    let isValid = false;
    if (!exists) {
      const hashedPassword = await bcrypt.hash(newAccount.password, 10);
      isValid = await this.userAccount.createAccount({
        ...newAccount,
        password: hashedPassword,
      });
    }
    return isValid;
  }
}
