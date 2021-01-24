"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.mockUserAuthentication = exports.mockCreateUserAccount = void 0;
var faker_1 = __importDefault(require("faker"));
var mockCreateUserAccount = function () { return ({
    firstname: faker_1.default.name.firstName(),
    lastname: faker_1.default.name.lastName(),
    email: faker_1.default.internet.email(),
    pseudo: faker_1.default.name.findName(),
    password: faker_1.default.internet.password(),
}); };
exports.mockCreateUserAccount = mockCreateUserAccount;
var mockUserAuthentication = function () { return ({
    email: faker_1.default.internet.email(),
    password: faker_1.default.internet.password(),
}); };
exports.mockUserAuthentication = mockUserAuthentication;
