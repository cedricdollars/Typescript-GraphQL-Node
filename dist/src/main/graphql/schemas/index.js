"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var event_1 = __importDefault(require("./event"));
var users_1 = __importDefault(require("./users"));
var base_1 = __importDefault(require("./base"));
exports.default = [event_1.default, users_1.default, base_1.default];
