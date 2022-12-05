import { createReadStream } from "fs";
import { createFileHash } from "../utils";
import TikTokObject from "../object";
import {
  TikTokVideoResponse,
  TikTokResponse,
  UploadType,
  UploadImageRequest,
  UploadImageFileRequest,
} from "./types";

export default class TikTokImage extends TikTokObject {
  static get ENDPOINT() {
    return "file/image";
  }

  public async uploadImageByFile(
    filePath: string,
    request: UploadImageFileRequest
  ): Promise<TikTokResponse<TikTokVideoResponse>> {
    const hash = await createFileHash(filePath);
    return this.uploadImage({
      ...request,
      upload_type: UploadType.UPLOAD_BY_FILE,
      image_file: createReadStream(filePath),
      image_signature: hash,
    });
  }

  public uploadImage(
    request: UploadImageRequest
  ): Promise<TikTokResponse<TikTokVideoResponse>> {
    return this.formDataPost<TikTokResponse<TikTokVideoResponse>>(
      this.formatEndpoint("ad/upload"),
      request
    );
  }

  private formatEndpoint(endpoint: string): string {
    return `${TikTokImage.ENDPOINT}/${endpoint}`;
  }
}
