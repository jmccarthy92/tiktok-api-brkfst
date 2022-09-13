import TikTokObject from "../object";
import {
  AdGroupField,
  AdGroupFilterField,
  CommonRequestOptions,
  ReportResponse,
  TikTokResponse,
} from "./types";

export default class TikTokAdGroup extends TikTokObject {
  static get ENDPOINT() {
    return "adgroup";
  }

  public async getAdGroups<Response = ReportResponse>(
    advertiserId: string,
    fields: AdGroupField[],
    options: CommonRequestOptions<AdGroupFilterField> = {}
  ): Promise<TikTokResponse<Response>> {
    return this.get<TikTokResponse<Response>>(`${TikTokAdGroup.ENDPOINT}/get`, {
      fields,
      advertiser_id: advertiserId,
      ...options,
    });
  }
}
