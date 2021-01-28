import Router from "koa-router";
import Koa from "koa";
import { EventMongoRepository } from "../../infra/DB/mongodb/event/event-mongo-repository";

export default (router: Router): void => {
  router.get("/events", async (ctx: Koa.Context) => {
    const eventMongo = new EventMongoRepository();
    const event = eventMongo.getAll();
    ctx.body = {
      data: { event },
    };
  });
  router.get("/events/:id", async (ctx: Koa.Context) => {
    const eventMongo = new EventMongoRepository();
    const id = eventMongo.load(ctx.params.id);
    if (!id) ctx.throw(Error("Not found"));
  });
};
