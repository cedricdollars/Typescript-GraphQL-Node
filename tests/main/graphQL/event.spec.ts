import { ApolloServer, gql } from "apollo-server-express";
import { makeApolloServer } from "./helper";
import { Collection } from "mongodb";
import dotenv from "dotenv";
import { MongodbHelper } from "../../../src/infra/DB/helpers/mongodb";
import { createTestClient } from "apollo-server-integration-testing";
import { TypeEvent } from "../../../src/domain/kind";
import { expect } from "chai";

dotenv.config();

let eventCollection: Collection;
let apolloServer: ApolloServer;

describe("GraphQL tests", () => {
  beforeEach(async () => {
    apolloServer = makeApolloServer();
    await MongodbHelper.connect(`${process.env.MONGO_URI}`);

    eventCollection = await MongodbHelper.getCollection("events");
    await eventCollection.deleteMany({});
  });
  afterEach(() => {
    MongodbHelper.disconnect();
  });
  const eventQuery = gql`
    query events {
      getOne {
        _id
        type
        name
        duration
        date
        location
      }
    }
  `;

  it("Should return event ", async () => {
    const now = new Date();
    await eventCollection.insertOne({
      type: TypeEvent,
      name: "Rencontre des développeurs IOS",
      duration: 40,
      date: now,
      location: "Paris",
    });
    const { query } = createTestClient({
      apolloServer,
    });
    const res = await query(eventQuery);
    expect(res).to.not.be.null;
  });
});
