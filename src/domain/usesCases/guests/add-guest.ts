export type GuestParams = {
  name: string;
  email: string;
};

export interface AddGuest {
  sendInvitation(data: GuestParams): Promise<string>;
}
