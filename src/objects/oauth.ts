import TikTokApi from "api";
import TikTokObject from "object";

export default class TikTokAuth extends TikTokObject {
  static get ENDPOINT() {
    return "oauth2";
  }

  constructor(protected api: TikTokApi) {
    super(api);
  }

  getAccessToken(appSecret: string, appId: string, authCode: string) {
    return this.post("oauth2/access_token");
  }
}
