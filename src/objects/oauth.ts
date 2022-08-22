import TikTokApi from "api";
import TikTokObject from "object";

export default class TikTokAuth extends TikTokObject {
  static get ENDPOINT() {
    return "oauth2";
  }

  constructor(protected api: TikTokApi) {
    super(api);
  }

  createAccessToken(appSecret: string, appId: string, authCode: string) {
    return this.post(`${TikTokAuth.ENDPOINT}/access_token`, {
      app_id: appId,
      auth_code: authCode,
      secret: appSecret,
    });
  }
}
