import { GuestParams } from "../../../domain/usesCases/guests/add-guest";
export interface AddGuestRepository {
  sendInvitation(data: GuestParams): Promise<string>;
}
