"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("@koa/cors"));
var koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
var apollo_server_1 = __importDefault(require("./apollo-server"));
var routes_1 = __importDefault(require("./routes"));
dotenv_1.default.config();
var App = /** @class */ (function () {
    function App() {
        this.app = new koa_1.default();
        apollo_server_1.default(this.app);
        routes_1.default(this.app);
        this.useMiddleware();
    }
    App.prototype.useMiddleware = function () {
        this.app.use(koa_bodyparser_1.default()).use(cors_1.default({
            origin: "*",
        }));
    };
    return App;
}());
exports.default = new App().app;
