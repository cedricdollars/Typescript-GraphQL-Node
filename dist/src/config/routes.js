"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var KoaRouter = require("koa-router");
exports.default = (function (app) {
    var router = new KoaRouter();
    router.all("/api", function (ctx) {
        ctx.body = "Done!";
    });
    app.use(router.routes());
    app.use(router.allowedMethods());
});
