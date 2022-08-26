import { createReadStream } from "fs";
import TikTokObject from "../object";
import {
  TikTokAuthorizedAccountResponse,
  TikTokResponse,
  UploadType,
  UploadVideoRequest,
} from "./types";

export default class TikTokVideo extends TikTokObject {
  static get ENDPOINT() {
    return "file/video";
  }

  public uploadVideoByFile(
    filePath: string,
    request: Exclude<UploadVideoRequest, "video_file" | "upload_type">
  ): Promise<TikTokResponse<TikTokAuthorizedAccountResponse>> {
    const fileStream = createReadStream(filePath);
    return this.formDataPost<TikTokResponse<TikTokAuthorizedAccountResponse>>(
      this.formatEndpoint("ad/upload"),
      {
        ...request,
        upload_type: UploadType.UPLOAD_BY_FILE,
        video_file: fileStream,
      }
    );
  }

  public uploadVideo(
    request: UploadVideoRequest
  ): Promise<TikTokResponse<TikTokAuthorizedAccountResponse>> {
    return this.formDataPost<TikTokResponse<TikTokAuthorizedAccountResponse>>(
      this.formatEndpoint("ad/upload"),
      request
    );
  }

  private formatEndpoint(endpoint: string): string {
    return `${TikTokVideo.ENDPOINT}/${endpoint}`;
  }
}
