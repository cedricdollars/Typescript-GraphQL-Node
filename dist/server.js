"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = __importDefault(require("./main/app"));
var mongoose_service_1 = require("./main/mongoose.service");
var log = console.log;
mongoose_service_1.mongooseService.connect();
var PORT = Number(process.env.PORT || 8080);
app_1.default.listen(function () { return log("[APP RUNNING \uD83D\uDE80]: Your server is up on " + PORT); });
