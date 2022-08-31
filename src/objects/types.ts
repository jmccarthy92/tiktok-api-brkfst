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
