import Event from "../../entities/event/event";

export interface LoadEvent {
  getById(id: number): Promise<Event | null>;
  getAll(): Promise<Event[]>;
}
