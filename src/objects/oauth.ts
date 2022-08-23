import TikTokObject from "../object";

export default class TikTokAuth extends TikTokObject {
  static get ENDPOINT() {
    return "oauth2";
  }

  public getAuthorizedAdAccounts(secret: string, appId: string) {
    return this.get(this.formatEndpoint("advertiser/get"), {
      app_id: appId,
      secret,
    });
  }

  public createAccessToken(secret: string, appId: string, authCode: string) {
    return this.post(this.formatEndpoint("access_token"), {
      app_id: appId,
      auth_code: authCode,
      secret,
    });
  }

  private formatEndpoint(endpoint: string) {
    return `${TikTokAuth.ENDPOINT}/${endpoint}`;
  }
}
