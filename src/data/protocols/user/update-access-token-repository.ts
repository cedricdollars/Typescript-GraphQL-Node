export interface UpdateAccessTokenRepository {
  updateAccessToken(_id: string, token: string): Promise<void>;
}
