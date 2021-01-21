import mongoose from "mongoose";
const log = console.log;

class MongoDatabase {
  private static _instance: MongoDatabase | null;

  public static getInstance(): MongoDatabase {
    if (!MongoDatabase._instance) {
      MongoDatabase._instance = new MongoDatabase();
    }
    return MongoDatabase._instance;
  }

  public connect() {
    mongoose
      .connect(`${process.env.MONGO_URI}`, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => log("CONNECTED TO DATABASE "))
      .catch((error) => {
        log("SOME ERROR OCCURED : ", error);
        process.exit(1);
      });
  }
  public disconnect() {
    mongoose.disconnect()
  }
}
export const mongooseService: MongoDatabase = MongoDatabase.getInstance();
