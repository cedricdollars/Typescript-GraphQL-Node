import Event from "../../entities/event/event";

export interface UpdateEvent {
  update(id: string): Promise<Event>;
}
