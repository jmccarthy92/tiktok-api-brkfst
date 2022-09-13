import TikTokObject from "../object";
import {
  AdField,
  AdFilterField,
  AdResponse,
  CommonRequestOptions,
  TikTokResponse,
} from "./types";

export default class TikTokAd extends TikTokObject {
  static get ENDPOINT() {
    return "ad";
  }

  public async getAds(
    advertiserId: string,
    fields: AdField[],
    options: CommonRequestOptions<AdFilterField> = {}
  ): Promise<TikTokResponse<AdResponse>> {
    return this.get<TikTokResponse<AdResponse>>(`${TikTokAd.ENDPOINT}/get`, {
      fields,
      advertiser_id: advertiserId,
      ...options,
    });
  }
}
