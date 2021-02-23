export interface DeleteGuestRepository {
  cancelInvitation(id: string): Promise<void>;
}
