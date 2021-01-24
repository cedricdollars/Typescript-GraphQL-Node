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
    if (!this.client.connect()) {
      await this.connect(this.uri);
    }
    return this.client.db().collection(name);
  },
};
