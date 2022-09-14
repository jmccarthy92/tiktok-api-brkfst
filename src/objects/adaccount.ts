import TikTokObject from "../object";
import { AdAccountResponse, TikTokResponse, AdAccountField } from "./types";

export default class TikTokAdAccount extends TikTokObject {
  static get ENDPOINT() {
    return "advertiser";
  }

  public async getAdAccountDetails(
    advertiserId: string[],
    fields: AdAccountField[]
  ): Promise<TikTokResponse<AdAccountResponse>> {
    return this.get<TikTokResponse<AdAccountResponse>>(
      `${TikTokAdAccount.ENDPOINT}/info`,
      {
        fields,
        advertiser_id: advertiserId,
      }
    );
  }
}
