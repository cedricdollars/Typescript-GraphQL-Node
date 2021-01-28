import { Controller } from "@/presentation/protocols/controller";
import { AddEventController } from "@/presentation/controllers/add-event-controller";
import { makeDbAddEvent } from "../usescases/add-event-factory";

// export const makeAddEventController = (): Controller => {
//   const controller = new AddEventController(makeDbAddEvent());
//   return controller;
// };
