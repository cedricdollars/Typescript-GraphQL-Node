export type AccountCredentials = {
  firstname: string;
  lastname: string;
  pseudo?: string;
  email: string;
  password: string;
};
export type result = boolean;
export interface CreateAccount {
  createAccount(newAccount: AccountCredentials): Promise<result>;
}
