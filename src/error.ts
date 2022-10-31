import { TikTokResponse } from "objects/types";

export class TikTokError extends Error {
  public readonly name = "TikTokError";

  constructor(
    private response: TikTokResponse,
    private method: string,
    private url: string,
    private body?: any
  ) {
    super(response.message);
  }

  public toJSON() {
    return {
      data: this.response.data,
      method: this.method,
      url: this.url,
      body: this.body,
    };
  }
}
