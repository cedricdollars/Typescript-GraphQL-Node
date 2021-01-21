import { User } from "../../entities/user/user";

export default interface Login {
  login(user: User): Promise<User>;
}
