"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var koa_1 = __importDefault(require("koa"));
var koa_logger_1 = __importDefault(require("koa-logger"));
var koa_json_1 = __importDefault(require("koa-json"));
var dotenv_1 = __importDefault(require("dotenv"));
var cors_1 = __importDefault(require("@koa/cors"));
var koa_bodyparser_1 = __importDefault(require("koa-bodyparser"));
dotenv_1.default.config();
var App = /** @class */ (function () {
    function App() {
        this.app = new koa_1.default();
        this.applyMiddleware();
    }
    /**
     * @configuration
     */
    App.prototype.applyMiddleware = function () {
        this.app
            .use(cors_1.default({ origin: "*" }))
            .use(koa_json_1.default())
            .use(koa_bodyparser_1.default)
            .use(koa_logger_1.default());
    };
    return App;
}());
exports.default = new App().app;
