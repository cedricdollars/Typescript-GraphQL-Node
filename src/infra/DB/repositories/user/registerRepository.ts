import { User } from "../../../../domain/entities/user/user";

export interface RegisterRepository {
  register(user: User): Promise<User>;
}
