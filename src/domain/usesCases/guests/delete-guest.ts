export interface DeleteGuest {
  cancelInvitation(id: string): Promise<void>;
}
