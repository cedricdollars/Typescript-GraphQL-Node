import express from "express";
import setupMiddleware from "./middleware";
import setupApolloServer from "./apollo-server";
import setupRoutes from "./routes";

const app = express();
setupApolloServer(app);
setupMiddleware(app);
setupRoutes(app);

// class App {
//   public readonly app: Koa;

//   constructor() {
//     this.app = new Koa();
//     setupApolloServer(this.app);
//     setupRoutes(this.app);
//     this.useMiddleware();
//   }
//   private useMiddleware() {
//     this.app.use(bodyParser()).use(
//       cors({
//         origin: "*",
//       })
//     );
//   }
// }

export default app;
