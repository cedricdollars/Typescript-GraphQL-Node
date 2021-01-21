import { User } from "../../entities/user/user";

export interface Register {
  register(user: User): Promise<User>;
}
