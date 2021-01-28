import "module-alias/register";
import app from "./main/config/app";
import { MongodbHelper } from "./infra/DB/helpers/mongodb";
import dotenv from "dotenv";
dotenv.config();
const log = console.log;

const PORT = Number(process.env.PORT || 8080);

MongodbHelper.connect(encodeURI(`${process.env.MONGO_URI}`))
  .then(async () => {
    app.listen(() =>
      log(`[APP RUNNING 🚀]: Your server is ready at http://localhost:${PORT}`)
    );
  })
  .catch((error) => console.error(`[WARNING ❗️]: ${error}`));
