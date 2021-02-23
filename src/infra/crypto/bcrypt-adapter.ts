import { HashComparer } from "../../data/protocols/crypto/hash-comparer";
import bcrypt from "bcrypt";
import { Hasher } from "../../data/protocols/crypto/hasher";
export class BcryptAdapter implements HashComparer, Hasher {
  constructor(private salt: number) {}
  async hash(plainText: string): Promise<string> {
    return await bcrypt.hash(plainText, this.salt);
  }

  compare(plainText: string, digest: string): Promise<boolean> {
    return bcrypt.compare(plainText, digest);
  }
}
