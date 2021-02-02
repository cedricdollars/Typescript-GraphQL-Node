export type AccountCredentials = {
  pseudo?: string;
  firstname: string;
  lastname: string;
  email: string;
  password: string;
};
export type result = boolean;
export interface CreateAccount {
  createAccount(newAccount: AccountCredentials): Promise<result>;
}
