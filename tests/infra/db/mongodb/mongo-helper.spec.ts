import { expect } from "chai";
import { MongodbHelper as sut } from "../../../../src/infra/DB/helpers/mongodb";

describe("Mongo helper test", () => {
  const uri =
    "mongodb+srv://cedricdollars:cedricdollars@cluster0.ku08x.mongodb.net/api_event?retryWrites=true&w=majority";
  before(async () => {
    await sut.connect(uri);
  });
  after(async () => {
    await sut.disconnect();
  });
  it("Should reconnect if mongodb is down", async () => {
    let eventCollection = await sut.getCollection("events");
    expect(eventCollection).to.be.ok;
  });
});
