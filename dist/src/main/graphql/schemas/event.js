"use strict";
var __makeTemplateObject = (this && this.__makeTemplateObject) || function (cooked, raw) {
    if (Object.defineProperty) { Object.defineProperty(cooked, "raw", { value: raw }); } else { cooked.raw = raw; }
    return cooked;
};
Object.defineProperty(exports, "__esModule", { value: true });
var apollo_server_koa_1 = require("apollo-server-koa");
exports.default = apollo_server_koa_1.gql(templateObject_1 || (templateObject_1 = __makeTemplateObject(["\n  scalar Date\n\n  enum Type {\n    MEETUP\n    EXPOSITION\n    WOKRSHOP\n    CONF\n    GALA\n  }\n  type Event {\n    id: ID!\n    type: Type!\n    name: String!\n    duration: Int!\n    date: Date!\n    location: String!\n  }\n  type Query {\n    oneEvent(id: ID!): Event\n    allEvent: [Event]\n  }\n  type Mutation {\n    save(\n      type: Type!\n      name: String!\n      duration: Int!\n      date: Date!\n      location: String\n    ): Event!\n  }\n"], ["\n  scalar Date\n\n  enum Type {\n    MEETUP\n    EXPOSITION\n    WOKRSHOP\n    CONF\n    GALA\n  }\n  type Event {\n    id: ID!\n    type: Type!\n    name: String!\n    duration: Int!\n    date: Date!\n    location: String!\n  }\n  type Query {\n    oneEvent(id: ID!): Event\n    allEvent: [Event]\n  }\n  type Mutation {\n    save(\n      type: Type!\n      name: String!\n      duration: Int!\n      date: Date!\n      location: String\n    ): Event!\n  }\n"])));
var templateObject_1;
