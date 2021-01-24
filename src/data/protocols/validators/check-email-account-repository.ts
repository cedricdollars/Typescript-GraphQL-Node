export interface CheckEmailAccountRepository {
  checkExistsEmail(email: string): Promise<isExists>;
}
export type isExists = boolean;
