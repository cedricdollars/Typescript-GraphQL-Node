export interface Encrypt {
  encrypt(plainText: string): Promise<string>;
}

export interface Decrypt {
  decrypt(text: string): Promise<string>;
}
