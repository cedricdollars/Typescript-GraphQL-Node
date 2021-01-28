import { Controller } from "@/presentation/protocols/controller";
import { LoadEventController } from "@/presentation/controllers/load-event-controller";
import { makeDbLoadEvent } from "../usescases/load-event-factory";
export const makeLoadEventController = (): Controller => {
  const controller = new LoadEventController(makeDbLoadEvent());
  return controller;
};
