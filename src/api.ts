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

  public async call(
    method: "POST" | "PUT" | "GET" | "PATCH" | "DELETE",
    path: string,
    body: Record<string, any> = {},
    params: Record<string, any> = {}
  ) {
    let url = `${TikTokApi.API}/${path}`;
    const urlParams = new URLSearchParams(params);
    if (urlParams) url += `?=${urlParams}`;

    const headers: HeadersInit = { "Content-Type": "application/json" };
    if (this.accessToken) headers["Access-Token"] = this.accessToken;

    try {
      const response = await fetch(url, {
        method,
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });
      if (this.debug) this.logResponse(method, url, body, response);
      return response;
    } catch (error) {
      if (this.debug) this.logError(method, url, body, error);
      throw error;
    }
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
