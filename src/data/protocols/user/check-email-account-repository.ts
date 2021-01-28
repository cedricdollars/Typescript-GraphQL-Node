export interface CheckEmailAccountRepository {
  checkByEmail(email: string): Promise<isExists>;
}
export type isExists = boolean;
