import { CheckEmailAccountRepository } from "../../../../data/protocols/user/check-email-account-repository";
import { MongodbHelper } from "../../helpers/mongodb";

export class CheckEmailAccountMongoRepository
  implements CheckEmailAccountRepository {
  constructor(private email: string) {}
  async checkByEmail(email: string): Promise<boolean> {
    let collection = await MongodbHelper.getCollection("users");
    let emailResult = collection.findOne({ email });
    return emailResult !== null;
  }
}
