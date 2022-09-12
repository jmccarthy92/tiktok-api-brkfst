import TikTokObject from "../object";
import {
  AdField,
  AdFilterField,
  CommonRequestOptions,
  ReportResponse,
  TikTokResponse,
} from "./types";

export default class TikTokAd extends TikTokObject {
  static get ENDPOINT() {
    return "ad";
  }

  public async getAds<Response = ReportResponse>(
    advertiserId: string,
    fields: AdField[],
    options: CommonRequestOptions<AdFilterField> = {}
  ): Promise<TikTokResponse<Response>> {
    return this.get<TikTokResponse<Response>>(`${TikTokAd.ENDPOINT}/get`, {
      fields,
      advertiser_id: advertiserId,
      ...this.serializeRequest(options),
    });
  }
}
