import Koa from "koa";
import KoaRouter = require("koa-router");

export default (app: Koa): void => {
  const router = new KoaRouter();
  router.all("/api", (ctx) => {
    ctx.body = "Done!";
  });
  app.use(router.routes());
  app.use(router.allowedMethods());
};
