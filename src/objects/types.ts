export interface TikTokResponse<Data = any> {
  message: string;
  code: number;
  data: Data;
  request_id: string;
}

export interface TikTokAuthorizedAccountResponse {
  list: TikTokAuthorizedAccountData[];
}

export interface TikTokAuthorizedAccountData {
  advertiser_id: string;
  advertiser_name: string;
}

export interface TikTokAccessTokenResponse {
  access_token: string;
  scope: number[];
  advertiser_ids: string[];
}
