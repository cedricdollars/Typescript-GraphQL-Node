import faker from "faker";
import { AddEventRepository } from "../../../../../src/data/protocols/event/add-event-repository";
import { LoadEventRepository } from "../../../../../src/data/protocols/event/load-event-repository";
import { mockOneEvent, mockEvents } from "./mock-event-model";
import Event from '../../../../../src/domain/entities/event/event';

export class AddEventRepositorySut implements AddEventRepository {
  data?: AddEventRepository;

  async save(event: any): Promise<void> {
    this.data = event;
  }
}

export class LoadEventRepositorySut implements LoadEventRepository {
  id?: string;
  data = mockOneEvent();
  datas = mockEvents();
  async load(id: string): Promise<Event> {
    this.id = id;
    return this.data;
  }
  async getAll(): Promise<Event[]> {
    return this.datas;
  }
}
