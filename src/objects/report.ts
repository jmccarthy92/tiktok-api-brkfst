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
}
