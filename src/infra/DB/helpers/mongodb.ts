import { MongoClient, Collection } from "mongodb";

export const MongodbHelper = {
  client: (null as unknown) as MongoClient,
  uri: (null as unknown) as string,

  async connect(uri: string): Promise<void> {
    this.uri = uri;
    this.client = await MongoClient.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
  },
  async disconnect(): Promise<void> {
    await this.client.close();
  },

  async getCollection(name: string): Promise<Collection> {
    if (!this.client) {
      return await (
        await MongoClient.connect(
          "mongodb+srv://cedricdollars:cedricdollars@cluster0.ku08x.mongodb.net/api_event?retryWrites=true&w=majority",
          { useUnifiedTopology: true, useNewUrlParser: true }
        )
      )
        .db()
        .collection(name);
    }
    return this.client.db().collection(name);
  },
};
