import Events from "../../entities/event/event";

export interface addEvent {
  save(event: Events): Promise<void>;
}
