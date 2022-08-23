import TikTokApi from "./api";

export default class TikTokObject {
  constructor(protected api: TikTokApi = TikTokApi.defaultApi) {}

  public async post(
    endpoint: string,
    body: Record<string, any> = {},
    params: Record<string, any> = {}
  ) {
    return this.api.call("POST", endpoint, body, params);
  }

  public async formDataPost(endpoint: string, body: Record<string, any> = {}) {
    const formData = new FormData();
    for (const key in body) formData.append(key, body[key]);
    return this.api.call("POST", endpoint, formData);
  }

  public async get(endpoint: string, params: Record<string, any> = {}) {
    return this.api.call("GET", endpoint, {}, params);
  }
}
