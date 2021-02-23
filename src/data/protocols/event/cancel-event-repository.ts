export interface CancelEventRepository {
  cancel(id: string): Promise<void>;
}
