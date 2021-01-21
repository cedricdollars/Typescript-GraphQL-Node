import Event from "../../../domain/entities/event/event";

export interface AddEventRepository {
  save(event: Event): Promise<void>;
}
