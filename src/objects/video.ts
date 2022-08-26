import { createHash } from "crypto";
import { createReadStream, ReadStream } from "fs";
import TikTokObject from "../object";
import {
  TikTokAuthorizedAccountResponse,
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
  ): Promise<TikTokResponse<TikTokAuthorizedAccountResponse>> {
    const { hash, stream } = await this.prepareFile(filePath);
    return this.uploadVideo({
      ...request,
      upload_type: UploadType.UPLOAD_BY_FILE,
      video_file: stream,
      video_signature: hash,
    });
  }

  public uploadVideo(
    request: UploadVideoRequest
  ): Promise<TikTokResponse<TikTokAuthorizedAccountResponse>> {
    return this.formDataPost<TikTokResponse<TikTokAuthorizedAccountResponse>>(
      this.formatEndpoint("ad/upload"),
      request
    );
  }

  private prepareFile(
    filePath: string,
    algorithm = "md5"
  ): Promise<{
    hash: string;
    stream: ReadStream;
  }> {
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
          return resolve({ hash, stream });
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
