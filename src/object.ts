import TikTokApi from "api";

export default class TikTokObject {
  constructor(protected api: TikTokApi) {
    this.api = api || TikTokApi.defaultApi;
  }

  public async post(
    endpoint: string,
    body: Record<string, any> = {},
    params: Record<string, any> = {}
  ) {
    return this.api.call("POST", endpoint, body, params);
  }

  public async get(endpoint: string, params: Record<string, any> = {}) {
    return this.api.call("GET", endpoint, {}, params);
  }
}
