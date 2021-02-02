"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("module-alias/register");
const app_1 = __importDefault(require("./main/config/app"));
const mongodb_1 = require("./infra/DB/helpers/mongodb");
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const log = console.log;
const PORT = Number(process.env.PORT || 8080);
const URI = String(process.env.MONGO_URI) ||
    "mongodb+srv://cedricdollars:cedricdollars@cluster0.ku08x.mongodb.net/api_event?retryWrites=true&w=majority";
mongodb_1.MongodbHelper.connect(URI)
    .then(async () => {
    app_1.default.listen(() => log(`[APP RUNNING 🚀]: Your server is ready at http://localhost:${PORT}`));
})
    .catch((error) => console.error(`[WARNING ❗️]: ${error}`));
