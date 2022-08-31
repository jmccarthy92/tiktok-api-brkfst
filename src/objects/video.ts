import { createHash } from "crypto";
import { createReadStream } from "fs";
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
    const hash = await this.createFileHash(filePath);
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

  private createFileHash(filePath: string, algorithm = "md5"): Promise<string> {
    // Algorithm depends on availability of OpenSSL on platform
    // Another algorithms: 'sha1', 'md5', 'sha256', 'sha512' ...
    return new Promise((resolve, reject) => {
      const shasum = createHash(algorithm);
      try {
        const stream = createReadStream(filePath);
        stream.on("data", function (data) {
          shasum.update(data);
        });
        // making digest
        stream.on("end", function () {
          const hash = shasum.digest("hex");
          return resolve(hash);
        });
      } catch (error) {
        return reject("calc fail");
      }
    });
  }

  private formatEndpoint(endpoint: string): string {
    return `${TikTokVideo.ENDPOINT}/${endpoint}`;
  }
}
