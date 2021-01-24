import Event from "../../../domain/entities/event/event";

export interface LoadEventRepository {
  load(id: string): Promise<Event>;
  getAll(): Promise<Event[]>;
}
