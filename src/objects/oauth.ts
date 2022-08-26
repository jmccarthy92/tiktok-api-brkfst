import TikTokObject from "../object";
import {
  TikTokAccessTokenResponse,
  TikTokAuthorizedAccountResponse,
  TikTokResponse,
} from "./types";

export default class TikTokAuth extends TikTokObject {
  static get ENDPOINT() {
    return "oauth2";
  }

  public getAuthorizedAdAccounts(
    secret: string,
    appId: string
  ): Promise<TikTokResponse<TikTokAuthorizedAccountResponse>> {
    return this.get<TikTokResponse<TikTokAuthorizedAccountResponse>>(
      this.formatEndpoint("advertiser/get"),
      {
        app_id: appId,
        secret,
      }
    );
  }

  public createAccessToken(
    secret: string,
    appId: string,
    authCode: string
  ): Promise<TikTokResponse<TikTokAccessTokenResponse>> {
    return this.post<TikTokResponse<TikTokAccessTokenResponse>>(
      this.formatEndpoint("access_token"),
      {
        app_id: appId,
        auth_code: authCode,
        secret,
      }
    );
  }

  private formatEndpoint(endpoint: string): string {
    return `${TikTokAuth.ENDPOINT}/${endpoint}`;
  }
}
