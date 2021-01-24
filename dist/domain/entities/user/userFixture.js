"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthenticateFixture = exports.UserFixture = void 0;
var faker = require("faker");
var kind_1 = require("../../kind");
var UserFixture = function () {
    return {
        id: faker.random.words(5),
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        email: faker.internet.email(),
        pseudo: faker.name.findName(),
        password: faker.internet.password(),
        events: [
            {
                id: faker.random.uuid(),
                type: kind_1.TypeEvent.conference,
                name: faker.random.word(),
                date: faker.date.recent(),
                duration: faker.random.number(30),
                location: faker.address.city(),
            },
        ],
    };
};
exports.UserFixture = UserFixture;
var AuthenticateFixture = function () {
    return {
        firstname: faker.name.firstName(),
        lastname: faker.name.lastName(),
        pseudo: faker.name.findName(),
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
};
exports.AuthenticateFixture = AuthenticateFixture;
