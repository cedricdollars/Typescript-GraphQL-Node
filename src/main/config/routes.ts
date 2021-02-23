import { Express } from "express";
import { readdirSync } from "fs";
import { EventRouter } from "../routes/event-routes";

// export default (app: Express): void => {
//   const router = Router();
//   app.use("/api", router);

//   readdirSync(`${__dirname}/../routes`).map(async (file) => {
//     if (!file.endsWith(".map")) {
//       await import(`../routes/${file}`);
//     }
//   });

// };
export class Routes {
  private eventRoute: EventRouter;
  private app: Express;
  baseUrl: string = "/api/";
  constructor(app: Express) {
    this.app = app;
    this.eventRoute = new EventRouter(app);
    this.configApiEndPoints(this.baseUrl);
  }
  public configApiEndPoints(baseUrl: string) {
    this.eventRoute.configApiEndPoints(baseUrl);
  }
}
