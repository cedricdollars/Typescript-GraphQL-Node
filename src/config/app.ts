import Koa from "koa";
import json from "koa-json";
import dotenv from "dotenv";
import cors from "@koa/cors";
import bodyParser from "koa-bodyparser";
import setupApolloServer from "./apollo-server";
import setupRoutes from "./routes";

dotenv.config();

class App {
  public readonly app: Koa;

  constructor() {
    this.app = new Koa();
    setupApolloServer(this.app);
    setupRoutes(this.app);
    this.useMiddleware();
  }
  private useMiddleware() {
    this.app.use(bodyParser()).use(
      cors({
        origin: "*",
      })
    );
  }
}
export default new App().app;
