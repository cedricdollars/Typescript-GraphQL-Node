"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.noContent = exports.done = exports.serverError = exports.unauthorized = exports.forbiden = exports.badRequest = void 0;
var unauthorized_error_1 = require("../errors/unauthorized-error");
var server_error_1 = require("../errors/server-error");
var badRequest = function (error) { return ({
    statusCode: 400,
    body: error,
}); };
exports.badRequest = badRequest;
var forbiden = function (error) { return ({
    statusCode: 403,
    body: error,
}); };
exports.forbiden = forbiden;
var unauthorized = function () { return ({
    statusCode: 401,
    body: new unauthorized_error_1.UnauthorizedError(),
}); };
exports.unauthorized = unauthorized;
var serverError = function (eror) { return ({
    statusCode: 500,
    body: new server_error_1.ServerError(eror.message),
}); };
exports.serverError = serverError;
var done = function (info) { return ({
    statusCode: 200,
    body: info,
}); };
exports.done = done;
var noContent = function () { return ({
    statusCode: 204,
    body: null,
}); };
exports.noContent = noContent;
