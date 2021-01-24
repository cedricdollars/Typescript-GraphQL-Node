import "module-alias/register";
import app from "./config/app";
import { MongodbHelper } from "./infra/DB/helpers/mongodb";

const log = console.log;

const PORT = Number(process.env.PORT || 8080);

MongodbHelper.connect(`${process.env.MONGO_URI}`)
  .then(() => {
    app.listen(() => log(`[APP RUNNING 🚀]: Your server is up on ${PORT}`));
  })
  .catch((error) => console.log(`[WARNING ❗️]: ${error}`));
