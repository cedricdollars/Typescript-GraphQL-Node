import Event from "../../entities/event/event";

export interface LoadEvent {
  load(id: string): Promise<Event | null>;
  getAll(): Promise<Event[]>;
}
