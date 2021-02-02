"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MongodbHelper = void 0;
const mongodb_1 = require("mongodb");
exports.MongodbHelper = {
    client: null,
    uri: null,
    async connect(uri) {
        this.uri = uri;
        this.client = await mongodb_1.MongoClient.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });
    },
    async disconnect() {
        await this.client.close();
    },
    async getCollection(name) {
        if (!this.client) {
            return await (await mongodb_1.MongoClient.connect("mongodb+srv://cedricdollars:cedricdollars@cluster0.ku08x.mongodb.net/api_event?retryWrites=true&w=majority", { useUnifiedTopology: true, useNewUrlParser: true }))
                .db()
                .collection(name);
        }
        return this.client.db().collection(name);
    },
};
