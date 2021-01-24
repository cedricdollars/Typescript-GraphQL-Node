import Authentication, {
  TokenResult,
  UserAccount,
} from "../../../domain/usesCases/users/authentication";
export class AuthenticationMemory implements Authentication {
  constructor() {}
  authenticate(user: UserAccount): Promise<TokenResult> {
    throw new Error("Method not implemented.");
  }
}
