import { CancelEventRepository } from "../../protocols/event/cancel-event-repository";

export class CancelEventMemory implements CancelEventRepository {
  constructor(private cancelEventRepo: CancelEventRepository) {}
  async cancel(id: string): Promise<void> {
    await this.cancelEventRepo.cancel(id);
  }
}
