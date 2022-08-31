import FormData from "form-data";
import axios from "axios";

export default class TikTokApi {
  static defaultApi: TikTokApi;

  static get VERSION(): string {
    return process.env.TIKTOK_VERSION || "v1.3";
  }

  static get API(): string {
    return `https://business-api.tiktok.com/open_api/${TikTokApi.VERSION}`;
  }

  constructor(
    private accessToken: string | null = null,
    private debug: boolean = false
  ) {
    TikTokApi.defaultApi = this;
  }

  public async call<T = any>(
    method: "POST" | "PUT" | "GET" | "PATCH" | "DELETE",
    path: string,
    body: Record<string, any> | FormData = {},
    params: Record<string, any> = {},
    headers: Record<string, any> = {
      "Content-Type": "application/json",
    }
  ): Promise<T> {
    const reqParams = { ...params };
    if (this.accessToken) {
      reqParams.access_token = this.accessToken;
      headers["Access-Token"] = this.accessToken;
    }
    const url = this.formatUrl(path, reqParams);
    try {
      const response = await axios.request({
        method,
        url,
        headers,
        data: this.formatRequestBody(body),
      });
      if (this.debug) this.logResponse(method, url, body, response.data);
      return response.data;
    } catch (error) {
      if (this.debug) this.logError(method, url, body, error);
      throw error;
    }
  }

  private formatRequestBody(body: Record<string, any> | FormData) {
    let reqBody;
    if (body instanceof FormData) {
      reqBody = body;
    } else if (Object.keys(body).length) reqBody = JSON.stringify(body);
    return reqBody;
  }

  private formatUrl(path: string, params: Record<string, any>): string {
    let url = `${TikTokApi.API}/${path}/`;
    const urlParams = new URLSearchParams(params).toString();
    if (urlParams) url += `?${urlParams}`;
    return url;
  }

  private logResponse(
    method: string,
    url: string,
    body: Record<string, any>,
    response: any
  ): void {
    console.log(`200 ${method} ${url} ${JSON.stringify(body)}`);
    console.log(`Response: ${response ? JSON.stringify(response) : ""}`);
  }

  private logError(
    method: string,
    url: string,
    body: Record<string, any>,
    response: any
  ): void {
    console.log(
      `${response.statusCode} ${method} ${url} ${JSON.stringify(body)}`
    );
  }
}
