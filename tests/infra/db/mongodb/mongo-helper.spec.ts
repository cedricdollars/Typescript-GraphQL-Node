import { expect } from "chai";
import { MongodbHelper as sut } from "../../../../src/infra/DB/helpers/mongodb";

describe("Mongo helper test", () => {
  before(async () => {
    await sut.connect(
      "mongodb+srv://cedricdollars:cedricdollars@cluster0.ku08x.mongodb.net/api_event?retryWrites=true&w=majority"
    );
    console.log("conntected");
  });
  after(async () => {
    await sut.disconnect();
    console.log("disconnected");
  });
  it("Should reconnect if mongodb is down", async () => {
    let eventCollection = await sut.getCollection("events");
    expect(eventCollection).to.be.true;

    sut.disconnect();
    eventCollection = await sut.getCollection("events");
    expect(eventCollection).to.be.true;
    sut.disconnect();
  });
});
