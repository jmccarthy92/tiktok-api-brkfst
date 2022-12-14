import { createReadStream } from "fs";
import { createFileHash } from "../utils";
import TikTokObject from "../object";
import {
  TikTokVideoResponse,
  TikTokResponse,
  UploadType,
  UploadVideoFileRequest,
  UploadVideoRequest,
} from "./types";

export default class TikTokVideo extends TikTokObject {
  static get ENDPOINT() {
    return "file/video";
  }

  public async uploadVideoByFile(
    filePath: string,
    request: UploadVideoFileRequest
  ): Promise<TikTokResponse<TikTokVideoResponse>> {
    const hash = await createFileHash(filePath);
    return this.uploadVideo({
      ...request,
      upload_type: UploadType.UPLOAD_BY_FILE,
      video_file: createReadStream(filePath),
      video_signature: hash,
    });
  }

  public uploadVideo(
    request: UploadVideoRequest
  ): Promise<TikTokResponse<TikTokVideoResponse>> {
    return this.formDataPost<TikTokResponse<TikTokVideoResponse>>(
      this.formatEndpoint("ad/upload"),
      request
    );
  }

  private formatEndpoint(endpoint: string): string {
    return `${TikTokVideo.ENDPOINT}/${endpoint}`;
  }
}
