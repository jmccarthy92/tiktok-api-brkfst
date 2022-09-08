import TikTokObject from "../object";
import {
  BasicReportResponse,
  BasicSyncReportRequest,
  ReportResponse,
  SyncReportRequest,
  TikTokResponse,
} from "./types";

export default class TikTokReport extends TikTokObject {
  static get ENDPOINT() {
    return "report";
  }

  public async getBasicSyncReport(
    request: BasicSyncReportRequest
  ): Promise<TikTokResponse<BasicReportResponse>> {
    return this.getSyncReport<BasicReportResponse>({
      ...request,
      report_type: "BASIC",
    });
  }

  public async getSyncReport<Response = ReportResponse>(
    request: SyncReportRequest
  ): Promise<TikTokResponse<Response>> {
    return this.get<TikTokResponse<Response>>(
      `${TikTokReport.ENDPOINT}/integrated/get`,
      this.serializeRequest(request)
    );
  }

  private serializeRequest(request: SyncReportRequest): SyncReportRequest {
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
