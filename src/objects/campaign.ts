import TikTokObject from "../object";
import {
  CampaignField,
  CampaignFilterField,
  CommonRequestOptions,
  ReportResponse,
  TikTokResponse,
} from "./types";

export default class TikTokCampaign extends TikTokObject {
  static get ENDPOINT() {
    return "campaign";
  }

  public async getCampaigns<Response = ReportResponse>(
    advertiserId: string,
    fields: CampaignField[],
    options: CommonRequestOptions<CampaignFilterField> = {}
  ): Promise<TikTokResponse<Response>> {
    return this.get<TikTokResponse<Response>>(
      `${TikTokCampaign.ENDPOINT}/get`,
      {
        fields,
        advertiser_id: advertiserId,
        ...options,
      }
    );
  }
}
