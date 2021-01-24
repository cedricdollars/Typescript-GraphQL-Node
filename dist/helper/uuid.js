"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.uuid = void 0;
var uuid = function () {
    return Math.random().toString(36).substr(2, 5);
};
exports.uuid = uuid;
