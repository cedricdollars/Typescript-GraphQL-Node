export interface LoadByAccountByEmailRepository {
  loadByEmail(email: string): Promise<UserResult>;
}
export type UserResult = {
  _id: string;
  lastname: string;
  password: string;
};
