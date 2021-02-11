export interface SendNotification {
  sendEmailNotification(): Promise<void>;
  sendSmsNotification(): Promise<void>;
}
