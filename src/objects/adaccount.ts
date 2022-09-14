import TikTokObject from "../object";
import { AdResponse, TikTokResponse, AdAccountField } from "./types";

export default class TikTokAdAccount extends TikTokObject {
  static get ENDPOINT() {
    return "advertiser";
  }

  public async getAdAccountDetails(
    advertiserId: string[],
    fields: AdAccountField[]
  ): Promise<TikTokResponse<AdResponse>> {
    return this.get<TikTokResponse<AdResponse>>(
      `${TikTokAdAccount.ENDPOINT}/info`,
      {
        fields,
        advertiser_id: advertiserId,
      }
    );
  }
}
