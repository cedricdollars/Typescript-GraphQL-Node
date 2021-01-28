import { Express, Router } from "express";
import { readdirSync } from "fs";

export default (app: Express): void => {
  const router = Router();
  app.use("/api", router);

  readdirSync(`${__dirname}/../routes`).map(async (file) => {
    if (!file.endsWith(".map")) {
      await import(`../routes/${file}`);
    }
  });
  // router.get("/api", async (ctx: Context, next: Next) => {
  //   ctx.response.body = "ok";
  //   await next();
  // });
  // app.use(router.routes()).use(router.allowedMethods());
};
