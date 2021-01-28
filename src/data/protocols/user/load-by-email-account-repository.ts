import { AccountCredentials } from "../../../domain/usesCases/users/create-account";
export interface LoadByAccountByEmailRepository {
  loadByEmail(email: string): Promise<AccountCredentials>;
}
