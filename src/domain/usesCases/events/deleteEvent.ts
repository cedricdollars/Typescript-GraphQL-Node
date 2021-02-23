export interface DeleteEvent {
  delete(id: string): Promise<void>;
}
