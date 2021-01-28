import Event from "../../entities/event/event";

export interface AddEvent {
  save(event: Event): Promise<void>;
}
