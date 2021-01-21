"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EventModel = void 0;
var mongoose_1 = require("mongoose");
var kind_1 = require("../../kind");
var mongoose_2 = __importDefault(require("mongoose"));
var eventSchema = new mongoose_1.Schema({
    type: { type: kind_1.TypeEvent, required: true },
    name: { type: String },
    date: { type: Date },
    duration: { type: Number },
    location: { type: String },
    user: { type: mongoose_1.Schema.Types.ObjectId, ref: "User" },
}, {
    timestamps: true,
});
exports.EventModel = mongoose_2.default.model("Events", eventSchema);
