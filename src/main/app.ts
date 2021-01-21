import Koa from "koa";
import logger from "koa-logger";
import json from "koa-json";
import dotenv from "dotenv";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";

dotenv.config();

class App {
  public app!: Koa;

  constructor() {
    this.app = new Koa();
    this.applyMiddleware();
  }

  /**
   * @configuration
   */
  private applyMiddleware() {
    this.app
      .use(cors({ origin: "*" }))
      .use(json())
      .use(bodyParser)
      .use(logger());
  }
}
export default new App().app;
