"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
var app_1 = __importDefault(require("./main/app"));
var mongodb_1 = require("./infra/DB/helpers/mongodb");
var log = console.log;
var PORT = Number(process.env.PORT || 8080);
mongodb_1.MongodbHelper.connect("" + process.env.MONGO_URI)
    .then(function () {
    app_1.default.listen(function () { return log("[APP RUNNING \uD83D\uDE80]: Your server is up on " + PORT); });
})
    .catch(function (error) { return console.log("[WARNING \u2757\uFE0F]: " + error); });
