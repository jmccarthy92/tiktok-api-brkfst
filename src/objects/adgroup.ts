import TikTokObject from "../object";
import {
  AdGroupField,
  AdGroupFilterField,
  AdGroupResponse,
  CommonRequestOptions,
  TikTokResponse,
} from "./types";

export default class TikTokAdGroup extends TikTokObject {
  static get ENDPOINT() {
    return "adgroup";
  }

  public async getAdGroups(
    advertiserId: string,
    fields: AdGroupField[],
    options: CommonRequestOptions<AdGroupFilterField> = {}
  ): Promise<TikTokResponse<AdGroupResponse>> {
    return this.get<TikTokResponse<AdGroupResponse>>(
      `${TikTokAdGroup.ENDPOINT}/get`,
      {
        fields,
        advertiser_id: advertiserId,
        ...options,
      }
    );
  }
}
