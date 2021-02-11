import {
  UpdateAccessTokenRepository,
  HashComparer,
  Encrypt,
  LoadByAccountByEmailRepository,
} from "@/data/protocols";

import { NoDataError } from "@/presentation/errors/no-data-error";
import { InvalidParamError } from "../../../presentation/errors/invalid-params-error";

import Authentication, {
  TokenResult,
  UserAccount,
} from "../../../domain/usesCases/users/authentication";
export class AuthenticationMemory implements Authentication {
  constructor(
    private loadAccountByEmailRepository: LoadByAccountByEmailRepository,
    private encrypter: Encrypt,
    private updateAccessTokenRepository: UpdateAccessTokenRepository,
    private hash: HashComparer
  ) {}

  async authenticate(user: UserAccount): Promise<TokenResult> {
    const account = await this.loadAccountByEmailRepository.loadByEmail(
      user.email
    );
    if (account) {
      const isValid = await this.hash.compare(user.password, account.password);
      if (isValid) {
        const accessToken = await this.encrypter.encrypt(account._id);
        await this.updateAccessTokenRepository.updateAccessToken(
          account._id,
          accessToken
        );
        return {
          accessToken,
          lastname: account.lastname,
        };
      }
      throw new InvalidParamError("Mot de passe invalide");
    }
    throw new NoDataError();
  }
}
