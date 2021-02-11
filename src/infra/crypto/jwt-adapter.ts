import { Encrypt, Decrypt } from "../../data/protocols/crypto/crypto-user";
import jwt from "jsonwebtoken";

export class JwtAdapter implements Encrypt, Decrypt {
  constructor(private secret: string) {}

  decrypt(text: string): Promise<string> {
    return jwt.verify(text, this.secret) as any;
  }
  async encrypt(plainText: string): Promise<string> {
    return jwt.sign({ _id: plainText }, this.secret, { expiresIn: "3h" });
  }
}
