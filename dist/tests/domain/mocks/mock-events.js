"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockAddEvent = void 0;
var faker_1 = __importDefault(require("faker"));
var uuid_1 = require("../../../src/domain/helper/uuid");
var kind_1 = require("../../../src/domain/kind");
var mockAddEvent = function () {
    return {
        id: uuid_1.uuid(),
        type: kind_1.TypeEvent.exposition,
        name: faker_1.default.random.words(10),
        duration: faker_1.default.random.number(),
        location: faker_1.default.address.city(),
        date: faker_1.default.date.recent(),
    };
};
exports.mockAddEvent = mockAddEvent;
