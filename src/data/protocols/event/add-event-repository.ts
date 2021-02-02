import { Params } from "../../../domain/usesCases/events/addEvent";

export interface AddEventRepository {
  save(event: Params): Promise<void>;
}
