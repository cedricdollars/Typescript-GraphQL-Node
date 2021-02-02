import Event from "../../entities/event/event";

export interface AddEvent {
  save(event: Params): Promise<void>;
}
export type Params = Omit<Event, "_id">;
