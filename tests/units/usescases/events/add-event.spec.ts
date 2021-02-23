import Event from "../../../../src/domain/entities/event/event";
import { AddEventRepositorySut } from "../../data/mock/events/mock-event-data";
import MockDate from "mockdate";
import { AddEventMemory } from "../../../../src/data/useCases/event/add-event";
import { mockOneEvent } from "../../data/mock/events/mock-event-model";
import { expect } from "chai";

describe("Unit | Event | Add event", () => {
  beforeEach(() => {
    MockDate.set(new Date());
  });
  afterEach(() => {
    MockDate.reset();
  });

  const event = mockOneEvent();

  it("Everything it's ok", async () => {
    const addEventRepositorySut = new AddEventRepositorySut();
    const sut = new AddEventMemory(addEventRepositorySut);
    sut.save(event);
    expect(addEventRepositorySut.data).to.equal(event);
  });
});
