import { EventRouter } from "../../../../src/main/routes/event-routes";
import { expect } from "chai";
import sinon from "sinon";
import { Express } from "express";
import express from "express";
import { Routes } from "../../../../src/main/config/routes";

describe("GET", () => {
  let server: Express = express();

  it("Should call configEndPoints ", async () => {
    var spy = sinon.spy(Routes.prototype, "configApiEndPoints");
    const route = new Routes(server);
    expect(spy.calledOnce).to.be.ok;
  });
});
