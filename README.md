# Introduction

NodeJS Wrapper for the Tik Tok Marketing API using node-fetch.

# Getting Started

TypeScript types are provided for arguments and outputs. As of `1.0.3` the only methods available are the following:

### createAccessToken

Uses the Tik Tok Developer App Id, App Secret, and OAuth code to create an Access Token on behalf of the user.

example:

```typescript
const tiktokApi = new TikTokApi(null, true);
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
const tiktokApi = new TikTokApi("<ACCESS_TOKEN>", true);
const {
  data: { list },
} = await new TikTokAuth(tiktokApi).getAuthorizedAdAccounts(
  "<SECRET>",
  "<APP_ID>"
);
```

# Build and Test

Run

```shell
npm run build
```

TODO: Automated Test Suite
