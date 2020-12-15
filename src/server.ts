import  Koa from 'koa';
import  logger from 'koa-logger';
import  json from 'koa-json'
import  Router from 'koa-router';
import dotenv from 'dotenv'
dotenv.config()

const  port = Number(process.env.PORT || 8080) 
const app = new Koa();
const router = new Router()

app.use(json())
app.use(logger())

router.get("/api", async (ctx, next) => {
    ctx.body = {
        msg: "Hello world"
    }
    await next();
})
app.use(router.routes())

app.listen(port,() => console.log(`[APP RUNNING]: Your server is up to port ${port}`));
