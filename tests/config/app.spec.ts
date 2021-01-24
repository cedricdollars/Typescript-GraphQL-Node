import app from "../../src/config/app";
import request from "supertest";

describe("GET", () => {
  it("should respond with status 200", async () => {
    const response = await request(app).get("/api");
    expect(response.text).toEqual("Done!");
    expect(response.status).toEqual(200);
  });
});
