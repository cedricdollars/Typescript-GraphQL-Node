import bodyParser from "body-parser";
import { Express } from "express";
import cors from "cors";
export default (app: Express) => {
  app.use(
    cors({
      origin: "*",
      allowedHeaders: "*",
    })
  );
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));
};
