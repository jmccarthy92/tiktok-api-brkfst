import { ReadStream } from "fs";

export interface TikTokResponse<Data = any> {
  message: string;
  code: number;
  data: Data;
  request_id: string;
}

export interface TikTokAuthorizedAccountResponse {
  list: TikTokAuthorizedAccountData[];
}

export interface TikTokVideoResponse {
  id: string;
  video_id: string;
  video_cover_url: string;
  format: string;
  preview_url: string;
  file_name: string;
  displayable: boolean;
  height: number;
  width: number;
  bit_rate: number;
  create_time: string;
  modify_time: string;
  signature: string;
  duration: number;
  size: number;
  fix_task_id: string;
  flaw_types: string[];
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

export type ServiceType = "AUCTION" | "RESERVATION";

export type ReportType = "BASIC" | "AUDIENCE" | "PLAYABLE_MATERIAL" | "CATALOG";

export type DataLevel =
  | "AUCTION_AD"
  | "AUCTION_ADGROUP"
  | "AUCTION_ADVERTISER"
  | "AUCTION_CAMPAIGN"
  | "RESERVATION_AD"
  | "RESERVATION_ADGROUP"
  | "RESERVATION_ADVERTISER"
  | "RESERVATION_CAMPAIGN";

export type OrderType = "ASC" | "DESC";

export type QueryMode = "REGULAR" | "CHUNK";

export type FilterType =
  | "IN"
  | "MATCH"
  | "GREATER_EQUAL"
  | "GREATER_THAN"
  | "LOWER_EQUAL"
  | "LOWER_THAN"
  | "BETWEEN;";

export interface Filtering<FieldName = string> {
  field_name: FieldName;
  filter_type: FilterType;
  filter_value: string | string[];
}

export type Dimension =
  | "advertiser_id"
  | "campaign_id"
  | "adgroup_id"
  | "ad_id"
  | "stat_time_day"
  | "stat_time_hour"
  | "ac"
  | "age"
  | "country_code"
  | "interest_category"
  | "gender"
  | "language"
  | "placement"
  | "platform";

export type BasicFilterField =
  | "campaign_ids"
  | "campaign_type"
  | "campaign_status"
  | "adgroup_ids"
  | "adgroup_status"
  | "ad_ids"
  | "ad_status"
  | "promotion_type"
  | "dpa_target_audience_type"
  | "create_time";

export type BasicDimension =
  | "advertiser_id"
  | "campaign_id"
  | "adgroup_id"
  | "ad_id"
  | "stat_time_day"
  | "stat_time_hour"
  | "country_code";

export type AttributeMetric =
  | "campaign_name"
  | "objective_type"
  | "campaign_id"
  | "adgroup_name"
  | "placement_type"
  | "adgroup_id"
  | "ad_name"
  | "ad_text"
  | "tt_app_id"
  | "tt_app_name"
  | "mobile_app_id"
  | "promotion_type"
  | "dpa_target_audience_type";

export type BasicDataMetric =
  | "spend"
  | "cash_spend"
  | "voucher_spend"
  | "cpc"
  | "cpm"
  | "impressions"
  | "clicks"
  | "ctr"
  | "reach"
  | "cost_per_1000_reached"
  | "conversion"
  | "cost_per_conversion"
  | "conversion_rate"
  | "real_time_conversion"
  | "real_time_cost_per_conversion"
  | "real_time_conversion_rate"
  | "result"
  | "cost_per_result"
  | "result_rate"
  | "real_time_result"
  | "real_time_cost_per_result"
  | "real_time_result_rate"
  | "secondary_goal_result"
  | "cost_per_secondary_goal_result"
  | "secondary_goal_result_rate"
  | "frequency"
  | "currency";

export type VideoPlayMetric =
  | "video_play_actions"
  | "video_watched_2s"
  | "video_watched_6s"
  | "average_video_play"
  | "average_video_play_per_user"
  | "video_views_p25"
  | "video_views_p50"
  | "video_views_p75"
  | "video_views_p100"
  | "engaged_view";

export type EngagementMetric =
  | "profile_visits"
  | "profile_visits_rate"
  | "likes"
  | "comments"
  | "shares"
  | "follows"
  | "clicks_on_music_disc";

export type AttributionMetric =
  | "vta_app_install"
  | "vta_conversion"
  | "cost_per_vta_conversion"
  | "vta_registration"
  | "cost_per_vta_registration"
  | "vta_purchase"
  | "cost_per_vta_purchase"
  | "cta_app_install"
  | "cta_conversion"
  | "cost_per_cta_conversion"
  | "cta_registration"
  | "cost_per_cta_registration"
  | "cta_purchase"
  | "cost_per_cta_purchase";

export type PageEventMetric =
  | "complete_payment_roas"
  | "complete_payment"
  | "cost_per_complete_payment"
  | "complete_payment_rate"
  | "value_per_complete_payment"
  | "total_complete_payment_rate"
  | "page_browse_view"
  | "cost_per_page_browse_view"
  | "page_browse_view_rate"
  | "total_page_browse_view_value"
  | "value_per_page_browse_view"
  | "button_click"
  | "cost_per_button_click"
  | "button_click_rate"
  | "value_per_button_click"
  | "total_button_click_value"
  | "online_consult"
  | "cost_per_online_consult"
  | "online_consult_rate"
  | "value_per_online_consult"
  | "total_online_consult_value"
  | "user_registration"
  | "cost_per_user_registration"
  | "user_registration_rate"
  | "value_per_user_registration"
  | "total_user_registration_value"
  | "product_details_page_browse"
  | "cost_per_product_details_page_browse"
  | "product_details_page_browse_rate"
  | "value_per_product_details_page_browse"
  | "total_product_details_page_browse_value"
  | "web_event_add_to_cart"
  | "cost_per_web_event_add_to_cart"
  | "web_event_add_to_cart_rate"
  | "value_per_web_event_add_to_cart"
  | "total_web_event_add_to_cart_value"
  | "on_web_order"
  | "cost_per_on_web_order"
  | "on_web_order_rate"
  | "value_per_on_web_order"
  | "total_on_web_order_value"
  | "initiate_checkout"
  | "cost_per_initiate_checkout"
  | "initiate_checkout_rate"
  | "value_per_initiate_checkout"
  | "total_initiate_checkout_value"
  | "add_billing"
  | "cost_per_add_billing"
  | "add_billing_rate"
  | "value_per_add_billing"
  | "total_add_billing_value"
  | "page_event_search"
  | "cost_per_page_event_search"
  | "page_event_search_rate"
  | "value_per_page_event_search"
  | "total_page_event_search_value"
  | "form"
  | "cost_per_form"
  | "form_rate"
  | "value_per_form"
  | "total_form_value"
  | "download_start"
  | "cost_per_download_start"
  | "download_start_rate"
  | "value_per_download_start"
  | "total_download_start_value"
  | "on_web_add_to_wishlist"
  | "cost_per_on_web_add_to_wishlist"
  | "on_web_add_to_wishlist_per_click"
  | "value_per_on_web_add_to_wishlist"
  | "total_on_web_add_to_wishlist_value"
  | "on_web_subscribe"
  | "cost_per_on_web_subscribe"
  | "on_web_subscribe_per_click"
  | "value_per_on_web_subscribe"
  | "total_on_web_subscribe_value";

export type OnsiteEventMetric =
  | "onsite_shopping_roas"
  | "onsite_shopping"
  | "onsite_initiate_checkout_count"
  | "onsite_on_web_detail"
  | "onsite_add_to_wishlist"
  | "onsite_add_billing"
  | "onsite_on_web_cart"
  | "onsite_form"
  | "onsite_download_start"
  | "ix_page_view_count"
  | "ix_button_click_count"
  | "ix_product_click_count";

export type BasicMetric =
  | AttributeMetric
  | BasicDataMetric
  | VideoPlayMetric
  | EngagementMetric
  | AttributeMetric
  | PageEventMetric
  | OnsiteEventMetric;

export type Metric =
  | "campaign_name"
  | "spend"
  | "impressions"
  | "reach"
  | string;

export type BasicSyncReportRequest = Omit<
  SyncReportRequest<BasicDimension, BasicMetric, BasicFilterField>,
  "report_type"
>;

export interface SyncReportRequest<
  D = Dimension,
  M = Metric,
  FilterFieldName = string
> {
  advertiser_id: string;
  report_type: ReportType;
  service_type?: ServiceType;
  data_level: DataLevel;
  dimensions: D[];
  metrics?: M[];
  start_date?: string; // YYYY-MM-DD
  end_date?: string; // YYYY-MM-DD
  filtering?: Filtering<FilterFieldName>[];
  order_field?: string;
  order_type?: OrderType;
  query_mode?: QueryMode;
  page?: number;
  page_size?: number;
}

export interface ReportResponse<
  D extends string = Dimension,
  M extends string = Metric
> {
  list: ReportData<D, M>[];
  page_info: PageInfo;
}

export type BasicReportResponse = ReportResponse<BasicDimension, BasicMetric>;

export interface ReportData<
  D extends string = Dimension,
  M extends string = Metric
> {
  dimensions: Record<D, string>;
  metrics: Record<M, string>;
}

export interface PageInfo {
  page: number;
  page_size: number;
  total_number: number;
  total_page: number;
}

export interface UploadVideoRequest {
  advertiser_id: string;
  upload_type: UploadType;
  video_file: string | ReadStream | Buffer;
  video_signature: string;
  file_name?: string;
  is_third_party?: boolean;
  flaw_detect?: boolean;
  auto_fix_enabled?: boolean;
  auto_bind_enabled?: boolean;
}

export type UploadVideoFileRequest = Pick<
  UploadVideoRequest,
  | "advertiser_id"
  | "is_third_party"
  | "flaw_detect"
  | "auto_bind_enabled"
  | "auto_fix_enabled"
  | "file_name"
>;

export enum UploadType {
  UPLOAD_BY_FILE = "UPLOAD_BY_FILE",
  UPLOAD_BY_URL = "UPLOAD_BY_URL",
  UPLOAD_BY_FILE_ID = "UPLOAD_BY_FILE_ID",
  UPLOAD_BY_VIDEO_ID = "UPLOAD_BY_VIDEO_ID",
}
