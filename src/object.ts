import FormData from "form-data";
import { CommonRequestOptions, SyncReportRequest } from "objects/types";
import TikTokApi from "./api";

export default class TikTokObject {
  constructor(protected api: TikTokApi = TikTokApi.defaultApi) {}

  public async post<T = any>(
    endpoint: string,
    body: Record<string, any> = {},
    params: Record<string, any> = {}
  ): Promise<T> {
    return this.api.call("POST", endpoint, body, params);
  }

  public async formDataPost<T = any>(
    endpoint: string,
    body: Record<string, any> = {},
    headers: Record<string, any> = {}
  ): Promise<T> {
    const formData = new FormData();
    for (const key in body) formData.append(key, body[key]);
    return this.api.call(
      "POST",
      endpoint,
      formData,
      {},
      { ...headers, ...formData.getHeaders() }
    );
  }

  public async get<T = any>(
    endpoint: string,
    params: Record<string, any> = {}
  ): Promise<T> {
    return this.api.call("GET", endpoint, {}, params);
  }

  protected serializeRequest<
    R extends CommonRequestOptions = CommonRequestOptions
  >(request: R): R {
    const { filtering } = request;
    if (filtering) {
      const hasArrayFilter = filtering.some(({ filter_value }) =>
        Array.isArray(filter_value)
      );
      if (hasArrayFilter) {
        return {
          ...request,
          filtering: filtering.map((filter) => ({
            ...filter,
            filter_value: JSON.stringify(filter.filter_value),
          })),
        };
      }
    }
    return request;
  }
}
