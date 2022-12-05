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

export const DATA_LEVELS = [
  "AUCTION_AD",
  "AUCTION_ADGROUP",
  "AUCTION_ADVERTISER",
  "AUCTION_CAMPAIGN",
  "RESERVATION_AD",
  "RESERVATION_ADGROUP",
  "RESERVATION_ADVERTISER",
  "RESERVATION_CAMPAIGN",
] as const;
type DataLevelTuple = typeof DATA_LEVELS;
export type DataLevel = DataLevelTuple[number];

export type OrderType = "ASC" | "DESC";

export type QueryMode = "REGULAR" | "CHUNK";

export const FILTER_TYPES = [
  "IN",
  "MATCH",
  "GREATER_EQUAL",
  "GREATER_THAN",
  "LOWER_EQUAL",
  "LOWER_THAN",
  "BETWEEN",
] as const;
type FilterTypeTuple = typeof FILTER_TYPES;
export type FilterType = FilterTypeTuple[number];

export interface Filtering<FieldName = string> {
  field_name: FieldName;
  filter_type: FilterType;
  filter_value: string | string[];
}

export const DIMENSION = [
  "advertiser_id",
  "campaign_id",
  "adgroup_id",
  "ad_id",
  "stat_time_day",
  "stat_time_hour",
  "ac",
  "age",
  "country_code",
  "interest_category",
  "gender",
  "language",
  "placement",
  "platform",
] as const;
type DimensionTuple = typeof DIMENSION;
export type Dimension = DimensionTuple[number];

export const BASIC_FILTER_FIELDS = [
  "campaign_ids",
  "campaign_type",
  "campaign_status",
  "adgroup_ids",
  "adgroup_status",
  "ad_ids",
  "ad_status",
  "promotion_type",
  "dpa_target_audience_type",
  "create_time",
] as const;
type BasicFilterFieldTuple = typeof BASIC_FILTER_FIELDS;
export type BasicFilterField = BasicFilterFieldTuple[number];

export const BASIC_DIMENSIONS = [
  "advertiser_id",
  "campaign_id",
  "adgroup_id",
  "ad_id",
  "stat_time_day",
  "stat_time_hour",
  "country_code",
] as const;
type BasicDimensionTuple = typeof BASIC_DIMENSIONS;
export type BasicDimension = BasicDimensionTuple[number];

export const ATTRIBUTE_METRICS = [
  "campaign_name",
  "objective_type",
  "campaign_id",
  "adgroup_name",
  "placement_type",
  "adgroup_id",
  "ad_name",
  "ad_text",
  "tt_app_id",
  "tt_app_name",
  "mobile_app_id",
  "promotion_type",
  "dpa_target_audience_type",
];
type AttributeMetricTuple = typeof ATTRIBUTE_METRICS;
export type AttributeMetric = AttributeMetricTuple[number];

export const BASIC_DATA_METRICS = [
  "spend",
  "cash_spend",
  "voucher_spend",
  "cpc",
  "cpm",
  "impressions",
  "clicks",
  "ctr",
  "reach",
  "cost_per_1000_reached",
  "conversion",
  "cost_per_conversion",
  "conversion_rate",
  "real_time_conversion",
  "real_time_cost_per_conversion",
  "real_time_conversion_rate",
  "result",
  "cost_per_result",
  "result_rate",
  "real_time_result",
  "real_time_cost_per_result",
  "real_time_result_rate",
  "secondary_goal_result",
  "cost_per_secondary_goal_result",
  "secondary_goal_result_rate",
  "frequency",
  "currency",
] as const;
type BasicDataMetricTuple = typeof BASIC_DATA_METRICS;
export type BasicDataMetric = BasicDataMetricTuple[number];

export const VIDEO_PLAY_METRICS = [
  "video_play_actions",
  "video_watched_2s",
  "video_watched_6s",
  "average_video_play",
  "average_video_play_per_user",
  "video_views_p25",
  "video_views_p50",
  "video_views_p75",
  "video_views_p100",
  "engaged_view",
] as const;
type VideoPlayMetricTuple = typeof VIDEO_PLAY_METRICS;
export type VideoPlayMetric = VideoPlayMetricTuple[number];

export const ENGAGEMENT_METRICS = [
  "profile_visits",
  "profile_visits_rate",
  "likes",
  "comments",
  "shares",
  "follows",
  "clicks_on_music_disc",
];
type EngagementMetricTuple = typeof ENGAGEMENT_METRICS;
export type EngagementMetric = EngagementMetricTuple[number];

export const ATTRIBUTION_METRICS = [
  "vta_app_install",
  "vta_conversion",
  "cost_per_vta_conversion",
  "vta_registration",
  "cost_per_vta_registration",
  "vta_purchase",
  "cost_per_vta_purchase",
  "cta_app_install",
  "cta_conversion",
  "cost_per_cta_conversion",
  "cta_registration",
  "cost_per_cta_registration",
  "cta_purchase",
  "cost_per_cta_purchase",
] as const;
type AttributionMetricTuple = typeof ATTRIBUTION_METRICS;
export type AttributionMetric = AttributionMetricTuple[number];

export const PAGE_EVENT_METRICS = [
  "complete_payment_roas",
  "complete_payment",
  "cost_per_complete_payment",
  "complete_payment_rate",
  "value_per_complete_payment",
  "total_complete_payment_rate",
  "page_browse_view",
  "cost_per_page_browse_view",
  "page_browse_view_rate",
  "total_page_browse_view_value",
  "value_per_page_browse_view",
  "button_click",
  "cost_per_button_click",
  "button_click_rate",
  "value_per_button_click",
  "total_button_click_value",
  "online_consult",
  "cost_per_online_consult",
  "online_consult_rate",
  "value_per_online_consult",
  "total_online_consult_value",
  "user_registration",
  "cost_per_user_registration",
  "user_registration_rate",
  "value_per_user_registration",
  "total_user_registration_value",
  "product_details_page_browse",
  "cost_per_product_details_page_browse",
  "product_details_page_browse_rate",
  "value_per_product_details_page_browse",
  "total_product_details_page_browse_value",
  "web_event_add_to_cart",
  "cost_per_web_event_add_to_cart",
  "web_event_add_to_cart_rate",
  "value_per_web_event_add_to_cart",
  "total_web_event_add_to_cart_value",
  "on_web_order",
  "cost_per_on_web_order",
  "on_web_order_rate",
  "value_per_on_web_order",
  "total_on_web_order_value",
  "initiate_checkout",
  "cost_per_initiate_checkout",
  "initiate_checkout_rate",
  "value_per_initiate_checkout",
  "total_initiate_checkout_value",
  "add_billing",
  "cost_per_add_billing",
  "add_billing_rate",
  "value_per_add_billing",
  "total_add_billing_value",
  "page_event_search",
  "cost_per_page_event_search",
  "page_event_search_rate",
  "value_per_page_event_search",
  "total_page_event_search_value",
  "form",
  "cost_per_form",
  "form_rate",
  "value_per_form",
  "total_form_value",
  "download_start",
  "cost_per_download_start",
  "download_start_rate",
  "value_per_download_start",
  "total_download_start_value",
  "on_web_add_to_wishlist",
  "cost_per_on_web_add_to_wishlist",
  "on_web_add_to_wishlist_per_click",
  "value_per_on_web_add_to_wishlist",
  "total_on_web_add_to_wishlist_value",
  "on_web_subscribe",
  "cost_per_on_web_subscribe",
  "on_web_subscribe_per_click",
  "value_per_on_web_subscribe",
  "total_on_web_subscribe_value",
];
type PageEventMetricTuple = typeof PAGE_EVENT_METRICS;
export type PageEventMetric = PageEventMetricTuple[number];

export const ONSITE_EVENT_METRICS = [
  "onsite_shopping_roas",
  "onsite_shopping",
  "onsite_initiate_checkout_count",
  "onsite_on_web_detail",
  "onsite_add_to_wishlist",
  "onsite_add_billing",
  "onsite_on_web_cart",
  "onsite_form",
  "onsite_download_start",
  "ix_page_view_count",
  "ix_button_click_count",
  "ix_product_click_count",
] as const;
type OnsiteEventMetricTuple = typeof ONSITE_EVENT_METRICS;
export type OnsiteEventMetric = OnsiteEventMetricTuple[number];

export const BASIC_METRICS: Readonly<BasicMetric[]> = Object.freeze(
  ATTRIBUTE_METRICS.concat(
    BASIC_DATA_METRICS,
    VIDEO_PLAY_METRICS,
    ENGAGEMENT_METRICS,
    ATTRIBUTE_METRICS,
    PAGE_EVENT_METRICS,
    ONSITE_EVENT_METRICS
  )
);
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
  FilterFieldName extends string = string
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

export interface UploadImageRequest {
  advertiser_id: string;
  upload_type: UploadType;
  image_file: string | ReadStream | Buffer;
  image_signature: string;
  file_name?: string;
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

export type UploadImageFileRequest = Pick<
  UploadImageRequest,
  "advertiser_id" | "file_name"
>;

export enum UploadType {
  UPLOAD_BY_FILE = "UPLOAD_BY_FILE",
  UPLOAD_BY_URL = "UPLOAD_BY_URL",
  UPLOAD_BY_FILE_ID = "UPLOAD_BY_FILE_ID",
  UPLOAD_BY_VIDEO_ID = "UPLOAD_BY_VIDEO_ID",
}

export interface CommonRequestOptions<FilterFieldName extends string = string> {
  filtering?: Record<FilterFieldName | string, string | string[]>;
  page?: number;
  page_size?: number;
}

export const CAMPAIGN_FIELDS = [
  "campaign_id",
  "campaign_name",
  "advertiser_id",
  "budget",
  "budget_mode",
  "operation_status",
  "objective",
  "objective_type",
  "create_time",
  "modify_time",
  "is_new_structure",
  "campaign_app_profile_page_state",
  "special_industries",
  "secondary_status",
] as const;
type CampaignFieldTuple = typeof CAMPAIGN_FIELDS;
export type CampaignField = CampaignFieldTuple[number];

export type CampaignFilterField =
  | "campaign_ids"
  | "campaign_name"
  | "campaign_type"
  | "objective_type"
  | "primary_status"
  | "creation_filter_start_time"
  | "creation_filter_end_time"
  | "secondary_status";

export const ADGROUP_FIELDS = [
  "advertiser_id",
  "campaign_id",
  "adgroup_id",
  "adgroup_name",
  "split_test_group_id",
  "split_test_status",
  "share_disabled",
  "placement_type",
  "placements",
  "inventory_filter_enabled",
  "comment_disabled",
  "app_id",
  "promotion_type",
  "store_id",
  "store_authorized_bc_id",
  "identity_id",
  "identity_type",
  "identity_authorized_bc_id",
  "app_download_url",
  "pixel_id",
  "optimization_event",
  "secondary_optimization_event",
  "creative_material_mode",
  "audience_ids",
  "excluded_audience_ids",
  "audience_rule",
  "audience_type",
  "location_ids",
  "is_hfss",
  "interest_category_ids",
  "interest_keyword_ids",
  "age_groups",
  "gender",
  "languages",
  "operating_systems",
  "network_types",
  "device_price_ranges",
  "min_android_version",
  "min_ios_version",
  "ios14_targeting",
  "device_model_ids",
  "household_income",
  "budget_mode",
  "budget",
  "scheduled_budget",
  "schedule_type",
  "schedule_start_time",
  "schedule_end_time",
  "dayparting",
  "optimization_goal",
  "bid_display_mode",
  "cpv_video_duration",
  "conversion_window (deprecated)",
  "pacing",
  "billing_event",
  "skip_learning_phase",
  "bid_type",
  "bid_price",
  "conversion_bid_price",
  "deep_bid_type",
  "deep_cpa_bid",
  "next_day_retention",
  "secondary_status",
  "operation_status",
  "frequency",
  "frequency_schedule",
  "statistic_type",
  "carrier_ids",
  "video_download_disabled",
  "blocked_pangle_app_ids",
  "actions",
  "action_period",
  "video_user_actions",
  "action_category_ids",
  "action_scene",
  "rf_purchased_type",
  "purchased_impression",
  "purchased_reach",
  "rf_estimated_cpr",
  "rf_estimated_frequency",
  "included_pangle_audience_package_ids",
  "excluded_pangle_audience_package_ids",
  "is_new_structure",
  "catalog_id",
  "product_set_id",
  "catalog_authorized_bc_id",
  "included_custom_actions",
  "excluded_custom_actions",
  "shopping_ads_retargeting_type",
  "brand_safety_type",
  "brand_safety_partner",
  "promotion_website_type",
  "ios14_quota_type",
  "roas_bid",
  "auto_targeting_enabled",
  "targeting_expansion",
  "adgroup_app_profile_page_state",
  "shopping_ads_type",
  "product_source",
] as const;
type AdGroupFieldTuple = typeof ADGROUP_FIELDS;
export type AdGroupField = AdGroupFieldTuple[number];

export type AdGroupFilterField =
  | "adgroup_name"
  | "campaign_ids"
  | "adgroup_ids"
  | "objective_type"
  | "creation_filter_start_time"
  | "creation_filter_end_time"
  | "billing_events"
  | "primary_status"
  | "secondary_status";

export const AD_FIELDS = [
  "advertiser_id",
  "campaign_id",
  "campaign_name",
  "adgroup_id",
  "adgroup_name",
  "ad_id",
  "ad_name",
  "identity_id",
  "identity_type",
  "identity_authorized_bc_id",
  "call_to_action",
  "call_to_action_id",
  "card_id",
  "secondary_status",
  "operation_status",
  "is_aco",
  "image_ids",
  "ad_format",
  "ad_text",
  "ad_texts",
  "video_id",
  "tiktok_item_id",
  "app_name",
  "landing_page_url",
  "landing_page_urls",
  "display_name",
  "profile_image_url",
  "impression_tracking_url",
  "click_tracking_url",
  "deeplink",
  "deeplink_type",
  "fallback_type",
  "playable_url",
  "page_id",
  "vast_moat_enabled",
  "creative_authorized",
  "is_new_structure",
  "create_time",
  "modify_time",
  "shopping_ads_fallback_type",
  "shopping_ads__deeplink_type",
  "shopping_ads_video_package_id",
  "promotional_music_disabled",
  "dark_post_status",
  "branded_content_disabled",
  "item_duet_status",
  "item_stitch_status",
  "brand_safety_postbid_partner",
  "product_specific_type",
  "catalog_id",
  "item_group_ids",
  "product_set_id",
  "sku_ids",
  "dynamic_format",
  "vertical_video_strategy",
  "dynamic_destination",
] as const;
type AdFieldTuple = typeof AD_FIELDS;
export type AdField = AdFieldTuple[number];

export type AdFilterField =
  | "campaign_ids"
  | "adgroup_ids"
  | "ad_text"
  | "ad_ids"
  | "objective_type"
  | "creation_filter_start_time"
  | "creation_filter_end_time"
  | "billing_events"
  | "primary_status"
  | "secondary_status";

export enum CampaignSecondaryStatus {
  CAMPAIGN_STATUS_DELETE = "CAMPAIGN_STATUS_DELETE",
  CAMPAIGN_STATUS_ADVERTISER_AUDIT_DENY = "CAMPAIGN_STATUS_ADVERTISER_AUDIT_DENY",
  CAMPAIGN_STATUS_ADVERTISER_AUDIT = "CAMPAIGN_STATUS_ADVERTISER_AUDIT",
  ADVERTISER_CONTRACT_PENDING = "ADVERTISER_CONTRACT_PENDING",
  ADVERTISER_ACCOUNT_PUNISH = "ADVERTISER_ACCOUNT_PUNISH",
  CAMPAIGN_STATUS_BUDGET_EXCEED = "CAMPAIGN_STATUS_BUDGET_EXCEED",
  CAMPAIGN_STATUS_DISABLE = "CAMPAIGN_STATUS_DISABLE",
  CAMPAIGN_STATUS_ENABLE = "CAMPAIGN_STATUS_ENABLE",
  CAMPAIGN_STATUS_ALL = "CAMPAIGN_STATUS_ALL",
  CAMPAIGN_STATUS_NOT_DELETE = "CAMPAIGN_STATUS_NOT_DELETE",
}

export enum AdGroupSecondaryStatus {
  ADGROUP_STATUS_ALL = "ADGROUP_STATUS_ALL",
  ADGROUP_STATUS_NOT_DELETE = "ADGROUP_STATUS_NOT_DELETE",
  ADGROUP_STATUS_DELETE = "ADGROUP_STATUS_DELETE",
  ADGROUP_STATUS_CAMPAIGN_DELETE = "ADGROUP_STATUS_CAMPAIGN_DELETE",
  ADGROUP_STATUS_ADVERTISER_AUDIT_DENY = "ADGROUP_STATUS_ADVERTISER_AUDIT_DENY",
  ADGROUP_STATUS_ADVERTISER_AUDIT = "ADGROUP_STATUS_ADVERTISER_AUDIT",
  ADVERTISER_CONTRACT_PENDING = "ADVERTISER_CONTRACT_PENDING",
  ADVERTISER_ACCOUNT_PUNISH = "ADVERTISER_ACCOUNT_PUNISH",
  ADGROUP_STATUS_CAMPAIGN_EXCEED = "ADGROUP_STATUS_CAMPAIGN_EXCEED",
  ADGROUP_STATUS_BUDGET_EXCEED = "ADGROUP_STATUS_BUDGET_EXCEED",
  ADGROUP_STATUS_BALANCE_EXCEED = "ADGROUP_STATUS_BALANCE_EXCEED",
  ADGROUP_STATUS_AUDIT_DENY = "ADGROUP_STATUS_AUDIT_DENY",
  ADGROUP_STATUS_REAUDIT = "ADGROUP_STATUS_REAUDIT",
  ADGROUP_STATUS_AUDIT = "ADGROUP_STATUS_AUDIT",
  ADGROUP_STATUS_CREATE = "ADGROUP_STATUS_CREATE",
  ADGROUP_STATUS_FROZEN = "ADGROUP_STATUS_FROZEN",
  ADGROUP_STATUS_NOT_START = "ADGROUP_STATUS_NOT_START",
  ADGROUP_STATUS_TIME_DONE = "ADGROUP_STATUS_TIME_DONE",
  ADGROUP_STATUS_CAMPAIGN_DISABLE = "ADGROUP_STATUS_CAMPAIGN_DISABLE",
  ADGROUP_STATUS_DISABLE = "ADGROUP_STATUS_DISABLE",
  ADGROUP_STATUS_DELIVERY_OK = "ADGROUP_STATUS_DELIVERY_OK",
  ADGROUP_STATUS_SHADOW_ADGROUP_REAUDIT = "ADGROUP_STATUS_SHADOW_ADGROUP_REAUDIT",
  ADGROUP_STATUS_PIXEL_UNBIND = "ADGROUP_STATUS_PIXEL_UNBIND",
  ADGROUP_STATUS_LIVE_OFFLINE = "ADGROUP_STATUS_LIVE_OFFLINE",
  ADGROUP_STATUS_PARTIAL_AUDIT_NO_DELIVERY = "ADGROUP_STATUS_PARTIAL_AUDIT_NO_DELIVERY",
  ADGROUP_STATUS_PARTIAL_AUDIT_DELIVERY_OK = "ADGROUP_STATUS_PARTIAL_AUDIT_DELIVERY_OK",
  ADGROUP_STATUS_INDUSTRY_QUALIFICATION_MISSING = "ADGROUP_STATUS_INDUSTRY_QUALIFICATION_MISSING",
  ADGROUP_STATUS_INDUSTRY_QUALIFICATION_EXPIRED = "ADGROUP_STATUS_INDUSTRY_QUALIFICATION_EXPIRED",
  ADGROUP_STATUS_INDUSTRY_QUALIFICATION_DENY = "ADGROUP_STATUS_INDUSTRY_QUALIFICATION_DENY",
}

export enum AdSecondaryStatus {
  AD_STATUS_ALL = "AD_STATUS_ALL",
  AD_STATUS_NOT_DELETE = "AD_STATUS_NOT_DELETE",
  AD_STATUS_CAMPAIGN_DELETE = "AD_STATUS_CAMPAIGN_DELETE",
  AD_STATUS_ADGROUP_DELETE = "AD_STATUS_ADGROUP_DELETE",
  AD_STATUS_DELETE = "AD_STATUS_DELETE",
  AD_STATUS_ADVERTISER_AUDIT_DENY = "AD_STATUS_ADVERTISER_AUDIT_DENY",
  AD_STATUS_ADVERTISER_AUDIT = "AD_STATUS_ADVERTISER_AUDIT",
  ADVERTISER_CONTRACT_PENDING = "ADVERTISER_CONTRACT_PENDING",
  ADVERTISER_ACCOUNT_PUNISH = "ADVERTISER_ACCOUNT_PUNISH",
  AD_STATUS_BALANCE_EXCEED = "AD_STATUS_BALANCE_EXCEED",
  AD_STATUS_CAMPAIGN_EXCEED = "AD_STATUS_CAMPAIGN_EXCEED",
  AD_STATUS_BUDGET_EXCEED = "AD_STATUS_BUDGET_EXCEED",
  AD_STATUS_AUDIT = "AD_STATUS_AUDIT",
  AD_STATUS_REAUDIT = "AD_STATUS_REAUDIT",
  AD_STATUS_AUDIT_DENY = "AD_STATUS_AUDIT_DENY",
  AD_STATUS_ADGROUP_AUDIT_DENY = "AD_STATUS_ADGROUP_AUDIT_DENY",
  AD_STATUS_ADGROUP_PARTIAL_AUDIT_NO_DELIVERY = "AD_STATUS_ADGROUP_PARTIAL_AUDIT_NO_DELIVERY",
  AD_STATUS_PARTIAL_AUDIT_DELIVERY_OK = "AD_STATUS_PARTIAL_AUDIT_DELIVERY_OK",
  AD_STATUS_PARTIAL_AUDIT_NO_DELIVERY = "AD_STATUS_PARTIAL_AUDIT_NO_DELIVERY",
  AD_STATUS_ADGROUP_INDUSTRY_QUALIFICATION_MISSING = "AD_STATUS_ADGROUP_INDUSTRY_QUALIFICATION_MISSING",
  AD_STATUS_ADGROUP_INDUSTRY_QUALIFICATION_EXPIRED = "AD_STATUS_ADGROUP_INDUSTRY_QUALIFICATION_EXPIRED",
  AD_STATUS_ADGROUP_INDUSTRY_QUALIFICATION_DENY = "AD_STATUS_ADGROUP_INDUSTRY_QUALIFICATION_DENY",
  AD_STATUS_MUSIC_AUTHORIZATION_MISSING = "AD_STATUS_MUSIC_AUTHORIZATION_MISSING",
  AD_STATUS_PIXEL_UNBIND = "AD_STAUS_PIXEL_UNBIND",
  AD_STATUS_LIVE_OFFLINE = "AD_STATUS_LIVE_OFFLINE",
  AD_STATUS_NOT_START = "AD_STATUS_NOT_START",
  AD_STATUS_DONE = "AD_STATUS_DONE",
  AD_STATUS_CAMPAIGN_DISABLE = "AD_STATUS_CAMPAIGN_DISABLE",
  AD_STATUS_ADGROUP_DISABLE = "AD_STATUS_ADGROUP_DISABLE",
  ADGROUP_STATUS_FROZEN = "ADGROUP_STATUS_FROZEN",
  AD_STATUS_DISABLE = "AD_STATUS_DISABLE",
  AD_STATUS_DELIVERY_OK = "AD_STATUS_DELIVERY_OK",
  AD_STATUS_PROCESS_AUDIO = "AD_STATUS_PROCESS_AUDIO",
}

export enum AdAccountStatus {
  STATUS_DISABLE = "STATUS_DISABLE",
  STATUS_PENDING_CONFIRM = "STATUS_PENDING_CONFIRM",
  STATUS_PENDING_VERIFIED = "STATUS_PENDING_VERIFIED",
  STATUS_CONFIRM_FAIL = "STATUS_CONFIRM_FAIL",
  STATUS_ENABLE = "STATUS_ENABLE",
  STATUS_CONFIRM_FAIL_END = "STATUS_CONFIRM_FAIL_END",
  STATUS_PENDING_CONFIRM_MODIFY = "STATUS_PENDING_CONFIRM_MODIFY",
  STATUS_CONFIRM_MODIFY_FAIL = "STATUS_CONFIRM_MODIFY_FAIL",
  STATUS_LIMIT = "STATUS_LIMIT",
  STATUS_WAIT_FOR_BPM_AUDIT = "STATUS_WAIT_FOR_BPM_AUDIT",
  STATUS_WAIT_FOR_PUBLIC_AUTH = "STATUS_WAIT_FOR_PUBLIC_AUTH",
  STATUS_SELF_SERVICE_UNAUDITED = "STATUS_SELF_SERVICE_UNAUDITED",
  STATUS_CONTRACT_PENDING = "STATUS_CONTRACT_PENDING",
}

export interface CommonResponse<Field extends string = string> {
  list: Record<Field, any>[];
  page_info: PageInfo;
}

export type CampaignResponse = CommonResponse<CampaignField>;
export type AdGroupResponse = CommonResponse<AdGroupField>;
export type AdResponse = CommonResponse<AdField>;
export type AdAccountResponse = CommonResponse<AdAccountField>;

export const AD_ACCOUNT_FIELDS = [
  "telephone_number",
  "contacter",
  "currency",
  "cellphone_number",
  "timezone",
  "advertiser_id",
  "role",
  "company",
  "status",
  "description",
  "rejection_reason",
  "address",
  "name",
  "language",
  "industry",
  "license_no",
  "email",
  "license_url",
  "country",
  "balance",
  "create_time",
  "display_timezone",
  "owner_bc_id",
] as const;
type AdAccountFieldTuple = typeof AD_ACCOUNT_FIELDS;
export type AdAccountField = AdAccountFieldTuple[number];

const record: Partial<Record<BasicMetric, BasicMetric>> = {};
export const TikTokReportField: Readonly<
  Partial<Record<BasicMetric, BasicMetric>>
> = Object.freeze(
  BASIC_METRICS.reduce((acc, field) => {
    acc[field] = field;
    return acc;
  }, record)
);
