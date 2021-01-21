import Event from "../../../domain/entities/event/event";

export interface LoadEventRepository {
  load(id: number): Promise<Event>;
  getAll(): Promise<Event[]>;
}
