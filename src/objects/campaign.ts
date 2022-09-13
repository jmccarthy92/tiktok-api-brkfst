import TikTokObject from "../object";
import {
  CampaignField,
  CampaignFilterField,
  CampaignResponse,
  CommonRequestOptions,
  TikTokResponse,
} from "./types";

export default class TikTokCampaign extends TikTokObject {
  static get ENDPOINT() {
    return "campaign";
  }

  public async getCampaigns(
    advertiserId: string,
    fields: CampaignField[],
    options: CommonRequestOptions<CampaignFilterField> = {}
  ): Promise<TikTokResponse<CampaignResponse>> {
    return this.get<TikTokResponse<CampaignResponse>>(
      `${TikTokCampaign.ENDPOINT}/get`,
      {
        fields,
        advertiser_id: advertiserId,
        ...options,
      }
    );
  }
}
