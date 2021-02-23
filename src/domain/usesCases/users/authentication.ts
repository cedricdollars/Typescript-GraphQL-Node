export type UserAccount = {
  email: string;
  password: string;
};
export type TokenResult = {
  accessToken: string;
  lastname: string;
};
export default interface Authentication {
  authenticate(user: UserAccount): Promise<TokenResult>;
}
