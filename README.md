# Introduction

NodeJS Wrapper for the Tik Tok Marketing API using Axios.

# Getting Started

TypeScript types are provided for arguments and outputs. As of `1.0.15` the only methods available are the following:

## Debug Mode

Enabling Debug mode on the `TikTokApi` object will log all Http Requests & Responses to the console.

```typescript
const tikTokApi = new TikTokApi("<TOKEN>", true);
// or for OAuth
const tikTokApi = new TikTokApi(null, true);
```

Debug mode is `false` by default.

## Auth

### createAccessToken

Uses the Tik Tok Developer App Id, App Secret, and OAuth code to create an Access Token on behalf of the user.

example:

```typescript
const tiktokApi = new TikTokApi(null);
const {
  data: { access_token },
} = await new TikTokAuth(tiktokApi).createAccessToken(
  "<SECRET>",
  "<APP_ID>",
  code
);
```

### getAuthorizedAdAccounts

Uses the Tik Tok Developer App Id, App Secret, and Access Token to request all the Ad Accounts the token has access to.

example:

```typescript
const tiktokApi = new TikTokApi("<ACCESS_TOKEN>");
const {
  data: { list },
} = await new TikTokAuth(tiktokApi).getAuthorizedAdAccounts(
  "<SECRET>",
  "<APP_ID>"
);
```

## Video

### uploadVideoByFile

Uses the Tik Tok Video API to upload a file to Tik Tok Creatives library.

example:

```typescript
const tiktokApi = new TikTokApi("<ACCESS_TOKEN>");
const tiktokVideo = new TikTokVideo(tiktokApi); // or `new TikTokVideo()` if the API is already instantiated
const { data } = await tiktokVideo.uploadVideoByFile("<FILE_PATH>", {
  advertiser_id: "<ADVERTISER_ID>",
});
```

## Report

### getBasicSyncReport

Uses the [Tik Tok Synchronous Report API](https://ads.tiktok.com/marketing_api/docs?id=1740302848100353) to pull a [Basic Report](https://ads.tiktok.com/marketing_api/docs?id=1738864915188737) from Tik Tok API.

```typescript
const tiktokApi = new TikTokApi("<ACCESS_TOKEN>");
const tiktokVideo = new TikTokReport(tiktokApi); // or `new TikTokReport()` if the API is already instantiated
const { data } = await tiktokVideo.getBasicSyncReport({
  advertiser_id: "<ADVERTISER_ID",
  data_level: "AUCTION_CAMPAIGN",
  dimensions: ["campaign_id"],
  metrics: ["spend", "impressions"],
  start_date: "2022-09-05",
  end_date: "2022-09-07",
  filtering: [
    {
      field_name: "campaign_ids",
      filter_type: "IN",
      filter_value: ["<CAMPAIGN_ID>"],
    },
  ],
});
```

## Campaign

### getCampaigns

Uses the [Tik Tok Campaign API](https://ads.tiktok.com/marketing_api/docs?id=1739315828649986) to retrieve Campaigns from Tik Tok API.

```typescript
const tiktokApi = new TikTokApi("<ACCESS_TOKEN>");
const tiktokCampaign = new TikTokCampaign(tiktokApi); // or `new TikTokReport()` if the API is already instantiated
const { data } = await tiktokCampaign.getCampaigns("<ADVERTISER_ID>", [
  "campaign_id",
  "campaign_name",
  "advertiser_id",
]);
```

## AdGroup

### getAdGroups

Uses the [Tik Tok AdGroup API](https://ads.tiktok.com/marketing_api/docs?id=1739314558673922) to retrieve Ad Groups from Tik Tok API.

```typescript
const tiktokApi = new TikTokApi("<ACCESS_TOKEN>");
const tiktokAdGroup = new TikTokAdGroup(tiktokApi); // or `new TikTokReport()` if the API is already instantiated
const { data } = await tiktokAdGroup.getAdGroups("<ADVERTISER_ID>", [
  "adgroup_id",
  "adgroup_name",
  "advertiser_id",
]);
```

## Ad

### getAds

Uses the [Tik Tok Ad API](https://ads.tiktok.com/marketing_api/docs?id=1735735588640770) to retrieve Ad from Tik Tok API.

```typescript
const tiktokApi = new TikTokApi("<ACCESS_TOKEN>");
const tiktokVideo = new TikTokAd(tiktokApi); // or `new TikTokReport()` if the API is already instantiated
const { data } = await tiktokVideo.getAds("<ADVERTISER_ID>", [
  "ad_id",
  "ad_name",
  "advertiser_id",
]);
```

## Ad Account

### getAdAccountDetails

Uses the [Tik Tok Ad Account API](https://ads.tiktok.com/marketing_api/docs?id=1739593083610113) to retrieve Ad Accounts from Tik Tok API.

```typescript
const tiktokApi = new TikTokApi("<ACCESS_TOKEN>");
const tiktokVideo = new TikTokAdAccount(tiktokApi); // or `new TikTokReport()` if the API is already instantiated
const { data } = await tiktokVideo.getAdDetails(
  ["<ADVERTISER_ID>"],
  ["status", "name"]
);
```

# Build and Test

Run

```shell
npm run build
```

TODO: Automated Test Suite
