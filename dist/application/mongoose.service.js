"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mongooseService = void 0;
var mongoose_1 = __importDefault(require("mongoose"));
var log = console.log;
var MongoDatabase = /** @class */ (function () {
    function MongoDatabase() {
    }
    MongoDatabase.getInstance = function () {
        if (!MongoDatabase._instance) {
            MongoDatabase._instance = new MongoDatabase();
        }
        return MongoDatabase._instance;
    };
    MongoDatabase.prototype.connect = function () {
        mongoose_1.default
            .connect("" + process.env.MONGO_URI, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
            .then(function () { return log("CONNECTED TO DATABASE "); })
            .catch(function (error) {
            log("SOME ERROR OCCURED : ", error);
            process.exit(1);
        });
    };
    MongoDatabase.prototype.disconnect = function () {
        mongoose_1.default.disconnect();
    };
    return MongoDatabase;
}());
exports.mongooseService = MongoDatabase.getInstance();
