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

export interface TikTokAuthorizedAccountData {
  advertiser_id: string;
  advertiser_name: string;
}

export interface TikTokAccessTokenResponse {
  access_token: string;
  scope: number[];
  advertiser_ids: string[];
}

export interface UploadVideoRequest {
  advertiser_id: string;
  upload_type: UploadType;
  video_file: string | ReadStream | Buffer;
  video_signature: string;
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
>;

export enum UploadType {
  UPLOAD_BY_FILE = "UPLOAD_BY_FILE",
  UPLOAD_BY_URL = "UPLOAD_BY_URL",
  UPLOAD_BY_FILE_ID = "UPLOAD_BY_FILE_ID",
  UPLOAD_BY_VIDEO_ID = "UPLOAD_BY_VIDEO_ID",
}
