"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.eventFixture = void 0;
var faker = require("faker");
var kind_1 = require("../../kind");
var eventFixture = function () {
    return {
        id: faker.random.uuid(),
        type: kind_1.TypeEvent.conference,
        name: faker.random.words(5),
        date: faker.date.recent(),
        duration: faker.random.number(),
        location: faker.address.city(),
    };
};
exports.eventFixture = eventFixture;
