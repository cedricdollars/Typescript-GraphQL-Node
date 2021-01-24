export type AccountCredentials = {
  firstname: string;
  lastname: string;
  pseudo?: string;
  email: string;
  password: string;
};

export interface CreateAccount {
  register(newAccount: AccountCredentials): Promise<AccountCredentials>;
}
