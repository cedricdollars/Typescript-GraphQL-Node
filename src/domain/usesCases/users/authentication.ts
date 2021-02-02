export type UserAccount = {
  email: string;
  password: string;
};
export type TokenResult = {
  accessToken: string;
  pseudo?: string;
};
export default interface Authentication {
  authenticate(user: UserAccount): Promise<TokenResult>;
}
