<div align="center">

[![Visit X](./header.png)](https://developer.x.com)

# [X](https://developer.x.com)<a id="x"></a>

Twitter API v2 available endpoints

</div>

## Table of Contents<a id="table-of-contents"></a>

<!-- toc -->

- [Installation](#installation)
- [Getting Started](#getting-started)
- [Reference](#reference)
  * [`x.bookmarks.addTweet`](#xbookmarksaddtweet)
  * [`x.bookmarks.getUserBookmarks`](#xbookmarksgetuserbookmarks)
  * [`x.bookmarks.removeTweet`](#xbookmarksremovetweet)
  * [`x.compliance.createJob`](#xcompliancecreatejob)
  * [`x.compliance.getJobById`](#xcompliancegetjobbyid)
  * [`x.compliance.listJobs`](#xcompliancelistjobs)
  * [`x.compliance.streamData`](#xcompliancestreamdata)
  * [`x.compliance.streamTweetsLabelEvents`](#xcompliancestreamtweetslabelevents)
  * [`x.compliance.streamUsersData`](#xcompliancestreamusersdata)
  * [`x.directMessages.createNewDmConversation`](#xdirectmessagescreatenewdmconversation)
  * [`x.directMessages.getDmEvents`](#xdirectmessagesgetdmevents)
  * [`x.directMessages.getDmEvents_0`](#xdirectmessagesgetdmevents_0)
  * [`x.directMessages.getRecentDmEvents`](#xdirectmessagesgetrecentdmevents)
  * [`x.directMessages.sendNewMessageToDmConversation`](#xdirectmessagessendnewmessagetodmconversation)
  * [`x.directMessages.sendNewMessageToUser`](#xdirectmessagessendnewmessagetouser)
  * [`x.general.getOpenApiSpec`](#xgeneralgetopenapispec)
  * [`x.lists.addMember`](#xlistsaddmember)
  * [`x.lists.createNewList`](#xlistscreatenewlist)
  * [`x.lists.deleteOwnedList`](#xlistsdeleteownedlist)
  * [`x.lists.followList`](#xlistsfollowlist)
  * [`x.lists.getFollowed`](#xlistsgetfollowed)
  * [`x.lists.getUserMemberships`](#xlistsgetusermemberships)
  * [`x.lists.getUserOwnedLists`](#xlistsgetuserownedlists)
  * [`x.lists.getUserPinnedLists`](#xlistsgetuserpinnedlists)
  * [`x.lists.lookupByListId`](#xlistslookupbylistid)
  * [`x.lists.pinList`](#xlistspinlist)
  * [`x.lists.removeMember`](#xlistsremovemember)
  * [`x.lists.unfollowList`](#xlistsunfollowlist)
  * [`x.lists.unpinList`](#xlistsunpinlist)
  * [`x.lists.updateOwnedList`](#xlistsupdateownedlist)
  * [`x.spaces.findMatchingSpaces`](#xspacesfindmatchingspaces)
  * [`x.spaces.getBuyersList`](#xspacesgetbuyerslist)
  * [`x.spaces.getTweets`](#xspacesgettweets)
  * [`x.spaces.lookupByCreatorIds`](#xspaceslookupbycreatorids)
  * [`x.spaces.lookupSpaceById`](#xspaceslookupspacebyid)
  * [`x.spaces.lookupSpaceIds`](#xspaceslookupspaceids)
  * [`x.tweets.addOrDeleteRules`](#xtweetsaddordeleterules)
  * [`x.tweets.createTweet`](#xtweetscreatetweet)
  * [`x.tweets.deleteById`](#xtweetsdeletebyid)
  * [`x.tweets.getBuyersList`](#xtweetsgetbuyerslist)
  * [`x.tweets.getFilteredStream`](#xtweetsgetfilteredstream)
  * [`x.tweets.getFirehoseStream`](#xtweetsgetfirehosestream)
  * [`x.tweets.getLikedTweets`](#xtweetsgetlikedtweets)
  * [`x.tweets.getMentionsById`](#xtweetsgetmentionsbyid)
  * [`x.tweets.getQuoteTweets`](#xtweetsgetquotetweets)
  * [`x.tweets.getRecentTweetCounts`](#xtweetsgetrecenttweetcounts)
  * [`x.tweets.getRecentTweets`](#xtweetsgetrecenttweets)
  * [`x.tweets.getTweetCounts`](#xtweetsgettweetcounts)
  * [`x.tweets.getTweets`](#xtweetsgettweets)
  * [`x.tweets.getUserHomeTimeline`](#xtweetsgetuserhometimeline)
  * [`x.tweets.hideReply`](#xtweetshidereply)
  * [`x.tweets.likeTweet`](#xtweetsliketweet)
  * [`x.tweets.listByListId`](#xtweetslistbylistid)
  * [`x.tweets.listByUserId`](#xtweetslistbyuserid)
  * [`x.tweets.lookupById`](#xtweetslookupbyid)
  * [`x.tweets.lookupByTweetIds`](#xtweetslookupbytweetids)
  * [`x.tweets.retweetTweetById`](#xtweetsretweettweetbyid)
  * [`x.tweets.searchAll`](#xtweetssearchall)
  * [`x.tweets.searchStreamRules`](#xtweetssearchstreamrules)
  * [`x.tweets.streamSample`](#xtweetsstreamsample)
  * [`x.tweets.streamSample10`](#xtweetsstreamsample10)
  * [`x.tweets.unlikeTweetById`](#xtweetsunliketweetbyid)
  * [`x.tweets.unretweetById`](#xtweetsunretweetbyid)
  * [`x.users.blockUserById`](#xusersblockuserbyid)
  * [`x.users.followUser`](#xusersfollowuser)
  * [`x.users.getBlockedUsers`](#xusersgetblockedusers)
  * [`x.users.getFollowersById`](#xusersgetfollowersbyid)
  * [`x.users.getFollowersByListId`](#xusersgetfollowersbylistid)
  * [`x.users.getFollowingUsers`](#xusersgetfollowingusers)
  * [`x.users.getMembersByListId`](#xusersgetmembersbylistid)
  * [`x.users.getMutedUsersById`](#xusersgetmutedusersbyid)
  * [`x.users.getRetweetedByTweetIdUsers`](#xusersgetretweetedbytweetidusers)
  * [`x.users.listLikingUsers`](#xuserslistlikingusers)
  * [`x.users.lookupById`](#xuserslookupbyid)
  * [`x.users.lookupByIds`](#xuserslookupbyids)
  * [`x.users.lookupByUsername`](#xuserslookupbyusername)
  * [`x.users.lookupByUsernames`](#xuserslookupbyusernames)
  * [`x.users.lookupMe`](#xuserslookupme)
  * [`x.users.muteUserById`](#xusersmuteuserbyid)
  * [`x.users.unblockUserById`](#xusersunblockuserbyid)
  * [`x.users.unfollowUser`](#xusersunfollowuser)
  * [`x.users.unmuteByUserId`](#xusersunmutebyuserid)

<!-- tocstop -->

## Installation<a id="installation"></a>
<div align="center">
  <a href="https://konfigthis.com/sdk-sign-up?company=X&language=TypeScript">
    <img src="https://raw.githubusercontent.com/konfig-dev/brand-assets/HEAD/cta-images/typescript-cta.png" width="70%">
  </a>
</div>

## Getting Started<a id="getting-started"></a>

```typescript
import { X } from "x-typescript-sdk";

const x = new X({
  // Defining the base path is optional and defaults to https://api.twitter.com
  // basePath: "https://api.twitter.com",
  accessToken: "ACCESS_TOKEN",
});

const addTweetResponse = await x.bookmarks.addTweet({
  id: "2244994945",
  tweet_id: "1346889436626259968",
});

console.log(addTweetResponse);
```

## Reference<a id="reference"></a>


### `x.bookmarks.addTweet`<a id="xbookmarksaddtweet"></a>

Adds a Tweet (ID in the body) to the requesting User's (in the path) bookmarks

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addTweetResponse = await x.bookmarks.addTweet({
  id: "2244994945",
  tweet_id: "1346889436626259968",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tweet_id: `string`<a id="tweet_id-string"></a>

Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

##### id: `string`<a id="id-string"></a>

The ID of the authenticated source User for whom to add bookmarks.

#### 🔄 Return<a id="🔄-return"></a>

[BookmarkMutationResponse](./models/bookmark-mutation-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/bookmarks` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.bookmarks.getUserBookmarks`<a id="xbookmarksgetuserbookmarks"></a>

Returns Tweet objects that have been bookmarked by the requesting User

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserBookmarksResponse = await x.bookmarks.getUserBookmarks({
  id: "2244994945",
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
  expansions: [
    "attachments.media_keys",
    "attachments.poll_ids",
    "author_id",
    "edit_history_tweet_ids",
    "entities.mentions.username",
    "geo.place_id",
    "in_reply_to_user_id",
    "referenced_tweets.id",
    "referenced_tweets.id.author_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  pollFields: [
    "duration_minutes",
    "end_datetime",
    "id",
    "options",
    "voting_status",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  placeFields: [
    "contained_within",
    "country",
    "country_code",
    "full_name",
    "geo",
    "id",
    "name",
    "place_type",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the authenticated source User for whom to return results.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get the next \'page\' of results.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### pollFields: `string`[]<a id="pollfields-string"></a>

A comma separated list of Poll fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### placeFields: `string`[]<a id="placefields-string"></a>

A comma separated list of Place fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2UsersIdBookmarksResponse](./models/get2-users-id-bookmarks-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/bookmarks` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.bookmarks.removeTweet`<a id="xbookmarksremovetweet"></a>

Removes a Tweet from the requesting User's bookmarked Tweets.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeTweetResponse = await x.bookmarks.removeTweet({
  id: "2244994945",
  tweetId: "1346889436626259968",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the authenticated source User whose bookmark is to be removed.

##### tweetId: `string`<a id="tweetid-string"></a>

The ID of the Tweet that the source User is removing from bookmarks.

#### 🔄 Return<a id="🔄-return"></a>

[BookmarkMutationResponse](./models/bookmark-mutation-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/bookmarks/{tweet_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.compliance.createJob`<a id="xcompliancecreatejob"></a>

Creates a compliance for the given job type

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createJobResponse = await x.compliance.createJob({
  name: "my-job",
  type: "tweets",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `string`<a id="type-string"></a>

Type of compliance job to list.

##### name: `string`<a id="name-string"></a>

User-provided name for a compliance job.

##### resumable: `boolean`<a id="resumable-boolean"></a>

If true, this endpoint will return a pre-signed URL with resumable uploads enabled.

#### 🔄 Return<a id="🔄-return"></a>

[CreateComplianceJobResponse](./models/create-compliance-job-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/compliance/jobs` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.compliance.getJobById`<a id="xcompliancegetjobbyid"></a>

Returns a single Compliance Job by ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getJobByIdResponse = await x.compliance.getJobById({
  id: "1372966999991541762",
  complianceJobFields: [
    "created_at",
    "download_expires_at",
    "download_url",
    "id",
    "name",
    "resumable",
    "status",
    "type",
    "upload_expires_at",
    "upload_url",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the Compliance Job to retrieve.

##### complianceJobFields: `string`[]<a id="compliancejobfields-string"></a>

A comma separated list of ComplianceJob fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2ComplianceJobsIdResponse](./models/get2-compliance-jobs-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/compliance/jobs/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.compliance.listJobs`<a id="xcompliancelistjobs"></a>

Returns recent Compliance Jobs for a given job type and optional job status

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listJobsResponse = await x.compliance.listJobs({
  type: "tweets",
  status: "created",
  complianceJobFields: [
    "created_at",
    "download_expires_at",
    "download_url",
    "id",
    "name",
    "resumable",
    "status",
    "type",
    "upload_expires_at",
    "upload_url",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### type: `'tweets' | 'users'`<a id="type-tweets--users"></a>

Type of Compliance Job to list.

##### status: `'created' | 'in_progress' | 'failed' | 'complete'`<a id="status-created--in_progress--failed--complete"></a>

Status of Compliance Job to list.

##### complianceJobFields: `string`[]<a id="compliancejobfields-string"></a>

A comma separated list of ComplianceJob fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2ComplianceJobsResponse](./models/get2-compliance-jobs-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/compliance/jobs` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.compliance.streamData`<a id="xcompliancestreamdata"></a>

Streams 100% of compliance data for Tweets

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const streamDataResponse = await x.compliance.streamData({
  partition: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### partition: `number`<a id="partition-number"></a>

The partition number.

##### backfillMinutes: `number`<a id="backfillminutes-number"></a>

The number of minutes of backfill requested.

##### startTime: `string`<a id="starttime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweet Compliance events will be provided.

##### endTime: `string`<a id="endtime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweet Compliance events will be provided.

#### 🔄 Return<a id="🔄-return"></a>

[TweetComplianceStreamResponse](./models/tweet-compliance-stream-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets/compliance/stream` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.compliance.streamTweetsLabelEvents`<a id="xcompliancestreamtweetslabelevents"></a>

Streams 100% of labeling events applied to Tweets

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const streamTweetsLabelEventsResponse =
  await x.compliance.streamTweetsLabelEvents({});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### backfillMinutes: `number`<a id="backfillminutes-number"></a>

The number of minutes of backfill requested.

##### startTime: `string`<a id="starttime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweet labels will be provided.

##### endTime: `string`<a id="endtime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the Tweet labels will be provided.

#### 🔄 Return<a id="🔄-return"></a>

[TweetLabelStreamResponse](./models/tweet-label-stream-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets/label/stream` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.compliance.streamUsersData`<a id="xcompliancestreamusersdata"></a>

Streams 100% of compliance data for Users

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const streamUsersDataResponse = await x.compliance.streamUsersData({
  partition: 1,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### partition: `number`<a id="partition-number"></a>

The partition number.

##### backfillMinutes: `number`<a id="backfillminutes-number"></a>

The number of minutes of backfill requested.

##### startTime: `string`<a id="starttime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the User Compliance events will be provided.

##### endTime: `string`<a id="endtime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp from which the User Compliance events will be provided.

#### 🔄 Return<a id="🔄-return"></a>

[UserComplianceStreamResponse](./models/user-compliance-stream-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/compliance/stream` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.directMessages.createNewDmConversation`<a id="xdirectmessagescreatenewdmconversation"></a>

Creates a new DM Conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewDmConversationResponse =
  await x.directMessages.createNewDmConversation({
    conversation_type: "Group",
    message: {
      text: "text_example",
    },
    participant_ids: ["2244994945"],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### conversation_type: `string`<a id="conversation_type-string"></a>

The conversation type that is being created.

##### message: [`CreateMessageRequest`](./models/create-message-request.ts)<a id="message-createmessagerequestmodelscreate-message-requestts"></a>

##### participant_ids: `string`[]<a id="participant_ids-string"></a>

Participants for the DM Conversation.

#### 🔄 Return<a id="🔄-return"></a>

[CreateDmEventResponse](./models/create-dm-event-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/dm_conversations` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.directMessages.getDmEvents`<a id="xdirectmessagesgetdmevents"></a>

Returns DM Events for a DM Conversation

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDmEventsResponse = await x.directMessages.getDmEvents({
  participantId: "2244994945",
  maxResults: 100,
  eventTypes: ["MessageCreate", "ParticipantsLeave"],
  dmEventFields: [
    "attachments",
    "created_at",
    "dm_conversation_id",
    "event_type",
    "id",
    "participant_ids",
    "referenced_tweets",
    "sender_id",
    "text",
  ],
  expansions: [
    "attachments.media_keys",
    "participant_ids",
    "referenced_tweets.id",
    "sender_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### participantId: `string`<a id="participantid-string"></a>

The ID of the participant user for the One to One DM conversation.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get a specified \'page\' of results.

##### eventTypes: `string`[]<a id="eventtypes-string"></a>

The set of event_types to include in the results.

##### dmEventFields: `string`[]<a id="dmeventfields-string"></a>

A comma separated list of DmEvent fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2DmConversationsWithParticipantIdDmEventsResponse](./models/get2-dm-conversations-with-participant-id-dm-events-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/dm_conversations/with/{participant_id}/dm_events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.directMessages.getDmEvents_0`<a id="xdirectmessagesgetdmevents_0"></a>

Returns DM Events for a DM Conversation

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getDmEvents_0Response = await x.directMessages.getDmEvents_0({
  id: "123123123-456456456",
  maxResults: 100,
  eventTypes: ["MessageCreate", "ParticipantsLeave"],
  dmEventFields: [
    "attachments",
    "created_at",
    "dm_conversation_id",
    "event_type",
    "id",
    "participant_ids",
    "referenced_tweets",
    "sender_id",
    "text",
  ],
  expansions: [
    "attachments.media_keys",
    "participant_ids",
    "referenced_tweets.id",
    "sender_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The DM Conversation ID.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get a specified \'page\' of results.

##### eventTypes: `string`[]<a id="eventtypes-string"></a>

The set of event_types to include in the results.

##### dmEventFields: `string`[]<a id="dmeventfields-string"></a>

A comma separated list of DmEvent fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2DmConversationsIdDmEventsResponse](./models/get2-dm-conversations-id-dm-events-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/dm_conversations/{id}/dm_events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.directMessages.getRecentDmEvents`<a id="xdirectmessagesgetrecentdmevents"></a>

Returns recent DM Events across DM conversations

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecentDmEventsResponse = await x.directMessages.getRecentDmEvents({
  maxResults: 100,
  eventTypes: ["MessageCreate", "ParticipantsLeave"],
  dmEventFields: [
    "attachments",
    "created_at",
    "dm_conversation_id",
    "event_type",
    "id",
    "participant_ids",
    "referenced_tweets",
    "sender_id",
    "text",
  ],
  expansions: [
    "attachments.media_keys",
    "participant_ids",
    "referenced_tweets.id",
    "sender_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get a specified \'page\' of results.

##### eventTypes: `string`[]<a id="eventtypes-string"></a>

The set of event_types to include in the results.

##### dmEventFields: `string`[]<a id="dmeventfields-string"></a>

A comma separated list of DmEvent fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2DmEventsResponse](./models/get2-dm-events-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/dm_events` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.directMessages.sendNewMessageToDmConversation`<a id="xdirectmessagessendnewmessagetodmconversation"></a>

Creates a new message for a DM Conversation specified by DM Conversation ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendNewMessageToDmConversationResponse =
  await x.directMessages.sendNewMessageToDmConversation({
    dmConversationId: "dmConversationId_example",
    text: "text_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### dmConversationId: `string`<a id="dmconversationid-string"></a>

The DM Conversation ID.

##### attachments: [`DmMediaAttachment`](./models/dm-media-attachment.ts)[]<a id="attachments-dmmediaattachmentmodelsdm-media-attachmentts"></a>

Attachments to a DM Event.

##### text: `string`<a id="text-string"></a>

Text of the message.

#### 🔄 Return<a id="🔄-return"></a>

[CreateDmEventResponse](./models/create-dm-event-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/dm_conversations/{dm_conversation_id}/messages` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.directMessages.sendNewMessageToUser`<a id="xdirectmessagessendnewmessagetouser"></a>

Creates a new message for a DM Conversation with a participant user by ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const sendNewMessageToUserResponse =
  await x.directMessages.sendNewMessageToUser({
    participantId: "2244994945",
    text: "text_example",
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### participantId: `string`<a id="participantid-string"></a>

The ID of the recipient user that will receive the DM.

##### attachments: [`DmMediaAttachment`](./models/dm-media-attachment.ts)[]<a id="attachments-dmmediaattachmentmodelsdm-media-attachmentts"></a>

Attachments to a DM Event.

##### text: `string`<a id="text-string"></a>

Text of the message.

#### 🔄 Return<a id="🔄-return"></a>

[CreateDmEventResponse](./models/create-dm-event-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/dm_conversations/with/{participant_id}/messages` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.general.getOpenApiSpec`<a id="xgeneralgetopenapispec"></a>

Full OpenAPI Specification in JSON format. (See https://github.com/OAI/OpenAPI-Specification/blob/master/README.md)

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getOpenApiSpecResponse = await x.general.getOpenApiSpec();
```

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/openapi.json` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.lists.addMember`<a id="xlistsaddmember"></a>

Causes a User to become a member of a List.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addMemberResponse = await x.lists.addMember({
  id: "1146654567674912769",
  user_id: "2244994945",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### user_id: `string`<a id="user_id-string"></a>

Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

##### id: `string`<a id="id-string"></a>

The ID of the List for which to add a member.

#### 🔄 Return<a id="🔄-return"></a>

[ListMutateResponse](./models/list-mutate-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/lists/{id}/members` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.lists.createNewList`<a id="xlistscreatenewlist"></a>

Creates a new List.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createNewListResponse = await x.lists.createNewList({
  name: "name_example",
  _private: false,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### name: `string`<a id="name-string"></a>

##### description: `string`<a id="description-string"></a>

##### private: `boolean`<a id="private-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ListCreateResponse](./models/list-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/lists` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.lists.deleteOwnedList`<a id="xlistsdeleteownedlist"></a>

Delete a List that you own.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteOwnedListResponse = await x.lists.deleteOwnedList({
  id: "1146654567674912769",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the List to delete.

#### 🔄 Return<a id="🔄-return"></a>

[ListDeleteResponse](./models/list-delete-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/lists/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.lists.followList`<a id="xlistsfollowlist"></a>

Causes a User to follow a List.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const followListResponse = await x.lists.followList({
  id: "2244994945",
  list_id: "1146654567674912769",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### list_id: `string`<a id="list_id-string"></a>

The unique identifier of this List.

##### id: `string`<a id="id-string"></a>

The ID of the authenticated source User that will follow the List.

#### 🔄 Return<a id="🔄-return"></a>

[ListFollowedResponse](./models/list-followed-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/followed_lists` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.lists.getFollowed`<a id="xlistsgetfollowed"></a>

Returns a User's followed Lists.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFollowedResponse = await x.lists.getFollowed({
  id: "2244994945",
  maxResults: 100,
  listFields: [
    "created_at",
    "description",
    "follower_count",
    "id",
    "member_count",
    "name",
    "owner_id",
    "private",
  ],
  expansions: ["owner_id"],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the User to lookup.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get a specified \'page\' of results.

##### listFields: `string`[]<a id="listfields-string"></a>

A comma separated list of List fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2UsersIdFollowedListsResponse](./models/get2-users-id-followed-lists-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/followed_lists` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.lists.getUserMemberships`<a id="xlistsgetusermemberships"></a>

Get a User's List Memberships.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserMembershipsResponse = await x.lists.getUserMemberships({
  id: "2244994945",
  maxResults: 100,
  listFields: [
    "created_at",
    "description",
    "follower_count",
    "id",
    "member_count",
    "name",
    "owner_id",
    "private",
  ],
  expansions: ["owner_id"],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the User to lookup.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get a specified \'page\' of results.

##### listFields: `string`[]<a id="listfields-string"></a>

A comma separated list of List fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2UsersIdListMembershipsResponse](./models/get2-users-id-list-memberships-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/list_memberships` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.lists.getUserOwnedLists`<a id="xlistsgetuserownedlists"></a>

Get a User's Owned Lists.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserOwnedListsResponse = await x.lists.getUserOwnedLists({
  id: "2244994945",
  maxResults: 100,
  listFields: [
    "created_at",
    "description",
    "follower_count",
    "id",
    "member_count",
    "name",
    "owner_id",
    "private",
  ],
  expansions: ["owner_id"],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the User to lookup.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get a specified \'page\' of results.

##### listFields: `string`[]<a id="listfields-string"></a>

A comma separated list of List fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2UsersIdOwnedListsResponse](./models/get2-users-id-owned-lists-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/owned_lists` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.lists.getUserPinnedLists`<a id="xlistsgetuserpinnedlists"></a>

Get a User's Pinned Lists.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserPinnedListsResponse = await x.lists.getUserPinnedLists({
  id: "2244994945",
  listFields: [
    "created_at",
    "description",
    "follower_count",
    "id",
    "member_count",
    "name",
    "owner_id",
    "private",
  ],
  expansions: ["owner_id"],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the authenticated source User for whom to return results.

##### listFields: `string`[]<a id="listfields-string"></a>

A comma separated list of List fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2UsersIdPinnedListsResponse](./models/get2-users-id-pinned-lists-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/pinned_lists` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.lists.lookupByListId`<a id="xlistslookupbylistid"></a>

Returns a List.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const lookupByListIdResponse = await x.lists.lookupByListId({
  id: "1146654567674912769",
  listFields: [
    "created_at",
    "description",
    "follower_count",
    "id",
    "member_count",
    "name",
    "owner_id",
    "private",
  ],
  expansions: ["owner_id"],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the List.

##### listFields: `string`[]<a id="listfields-string"></a>

A comma separated list of List fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2ListsIdResponse](./models/get2-lists-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/lists/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.lists.pinList`<a id="xlistspinlist"></a>

Causes a User to pin a List.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const pinListResponse = await x.lists.pinList({
  id: "2244994945",
  list_id: "1146654567674912769",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### list_id: `string`<a id="list_id-string"></a>

The unique identifier of this List.

##### id: `string`<a id="id-string"></a>

The ID of the authenticated source User that will pin the List.

#### 🔄 Return<a id="🔄-return"></a>

[ListPinnedResponse](./models/list-pinned-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/pinned_lists` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.lists.removeMember`<a id="xlistsremovemember"></a>

Causes a User to be removed from the members of a List.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const removeMemberResponse = await x.lists.removeMember({
  id: "1146654567674912769",
  userId: "2244994945",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the List to remove a member.

##### userId: `string`<a id="userid-string"></a>

The ID of User that will be removed from the List.

#### 🔄 Return<a id="🔄-return"></a>

[ListMutateResponse](./models/list-mutate-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/lists/{id}/members/{user_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.lists.unfollowList`<a id="xlistsunfollowlist"></a>

Causes a User to unfollow a List.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unfollowListResponse = await x.lists.unfollowList({
  id: "2244994945",
  listId: "1146654567674912769",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the authenticated source User that will unfollow the List.

##### listId: `string`<a id="listid-string"></a>

The ID of the List to unfollow.

#### 🔄 Return<a id="🔄-return"></a>

[ListFollowedResponse](./models/list-followed-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/followed_lists/{list_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.lists.unpinList`<a id="xlistsunpinlist"></a>

Causes a User to remove a pinned List.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unpinListResponse = await x.lists.unpinList({
  id: "2244994945",
  listId: "1146654567674912769",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the authenticated source User for whom to return results.

##### listId: `string`<a id="listid-string"></a>

The ID of the List to unpin.

#### 🔄 Return<a id="🔄-return"></a>

[ListUnpinResponse](./models/list-unpin-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/pinned_lists/{list_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.lists.updateOwnedList`<a id="xlistsupdateownedlist"></a>

Update a List that you own.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const updateOwnedListResponse = await x.lists.updateOwnedList({
  id: "1146654567674912769",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the List to modify.

##### description: `string`<a id="description-string"></a>

##### name: `string`<a id="name-string"></a>

##### private: `boolean`<a id="private-boolean"></a>

#### 🔄 Return<a id="🔄-return"></a>

[ListUpdateResponse](./models/list-update-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/lists/{id}` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.spaces.findMatchingSpaces`<a id="xspacesfindmatchingspaces"></a>

Returns Spaces that match the provided query.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const findMatchingSpacesResponse = await x.spaces.findMatchingSpaces({
  query: "crypto",
  state: "all",
  maxResults: 100,
  spaceFields: [
    "created_at",
    "creator_id",
    "ended_at",
    "host_ids",
    "id",
    "invited_user_ids",
    "is_ticketed",
    "lang",
    "participant_count",
    "scheduled_start",
    "speaker_ids",
    "started_at",
    "state",
    "subscriber_count",
    "title",
    "topic_ids",
    "updated_at",
  ],
  expansions: [
    "creator_id",
    "host_ids",
    "invited_user_ids",
    "speaker_ids",
    "topic_ids",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  topicFields: ["description", "id", "name"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `string`<a id="query-string"></a>

The search query.

##### state: `'live' | 'scheduled' | 'all'`<a id="state-live--scheduled--all"></a>

The state of Spaces to search for.

##### maxResults: `number`<a id="maxresults-number"></a>

The number of results to return.

##### spaceFields: `string`[]<a id="spacefields-string"></a>

A comma separated list of Space fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### topicFields: `string`[]<a id="topicfields-string"></a>

A comma separated list of Topic fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2SpacesSearchResponse](./models/get2-spaces-search-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/spaces/search` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.spaces.getBuyersList`<a id="xspacesgetbuyerslist"></a>

Retrieves the list of Users who purchased a ticket to the given space

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBuyersListResponse = await x.spaces.getBuyersList({
  id: "1SLjjRYNejbKM",
  maxResults: 100,
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  expansions: ["pinned_tweet_id"],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the Space to be retrieved.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get a specified \'page\' of results.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2SpacesIdBuyersResponse](./models/get2-spaces-id-buyers-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/spaces/{id}/buyers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.spaces.getTweets`<a id="xspacesgettweets"></a>

Retrieves Tweets shared in the specified Space.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTweetsResponse = await x.spaces.getTweets({
  id: "1SLjjRYNejbKM",
  maxResults: 25,
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
  expansions: [
    "attachments.media_keys",
    "attachments.poll_ids",
    "author_id",
    "edit_history_tweet_ids",
    "entities.mentions.username",
    "geo.place_id",
    "in_reply_to_user_id",
    "referenced_tweets.id",
    "referenced_tweets.id.author_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  pollFields: [
    "duration_minutes",
    "end_datetime",
    "id",
    "options",
    "voting_status",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  placeFields: [
    "contained_within",
    "country",
    "country_code",
    "full_name",
    "geo",
    "id",
    "name",
    "place_type",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the Space to be retrieved.

##### maxResults: `number`<a id="maxresults-number"></a>

The number of Tweets to fetch from the provided space. If not provided, the value will default to the maximum of 100.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### pollFields: `string`[]<a id="pollfields-string"></a>

A comma separated list of Poll fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### placeFields: `string`[]<a id="placefields-string"></a>

A comma separated list of Place fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2SpacesIdTweetsResponse](./models/get2-spaces-id-tweets-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/spaces/{id}/tweets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.spaces.lookupByCreatorIds`<a id="xspaceslookupbycreatorids"></a>

Returns a variety of information about the Spaces created by the provided User IDs

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const lookupByCreatorIdsResponse = await x.spaces.lookupByCreatorIds({
  userIds: ["2244994945"],
  spaceFields: [
    "created_at",
    "creator_id",
    "ended_at",
    "host_ids",
    "id",
    "invited_user_ids",
    "is_ticketed",
    "lang",
    "participant_count",
    "scheduled_start",
    "speaker_ids",
    "started_at",
    "state",
    "subscriber_count",
    "title",
    "topic_ids",
    "updated_at",
  ],
  expansions: [
    "creator_id",
    "host_ids",
    "invited_user_ids",
    "speaker_ids",
    "topic_ids",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  topicFields: ["description", "id", "name"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userIds: `string`[]<a id="userids-string"></a>

The IDs of Users to search through.

##### spaceFields: `string`[]<a id="spacefields-string"></a>

A comma separated list of Space fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### topicFields: `string`[]<a id="topicfields-string"></a>

A comma separated list of Topic fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2SpacesByCreatorIdsResponse](./models/get2-spaces-by-creator-ids-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/spaces/by/creator_ids` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.spaces.lookupSpaceById`<a id="xspaceslookupspacebyid"></a>

Returns a variety of information about the Space specified by the requested ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const lookupSpaceByIdResponse = await x.spaces.lookupSpaceById({
  id: "1SLjjRYNejbKM",
  spaceFields: [
    "created_at",
    "creator_id",
    "ended_at",
    "host_ids",
    "id",
    "invited_user_ids",
    "is_ticketed",
    "lang",
    "participant_count",
    "scheduled_start",
    "speaker_ids",
    "started_at",
    "state",
    "subscriber_count",
    "title",
    "topic_ids",
    "updated_at",
  ],
  expansions: [
    "creator_id",
    "host_ids",
    "invited_user_ids",
    "speaker_ids",
    "topic_ids",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  topicFields: ["description", "id", "name"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the Space to be retrieved.

##### spaceFields: `string`[]<a id="spacefields-string"></a>

A comma separated list of Space fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### topicFields: `string`[]<a id="topicfields-string"></a>

A comma separated list of Topic fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2SpacesIdResponse](./models/get2-spaces-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/spaces/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.spaces.lookupSpaceIds`<a id="xspaceslookupspaceids"></a>

Returns a variety of information about the Spaces specified by the requested IDs

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const lookupSpaceIdsResponse = await x.spaces.lookupSpaceIds({
  ids: ["1SLjjRYNejbKM"],
  spaceFields: [
    "created_at",
    "creator_id",
    "ended_at",
    "host_ids",
    "id",
    "invited_user_ids",
    "is_ticketed",
    "lang",
    "participant_count",
    "scheduled_start",
    "speaker_ids",
    "started_at",
    "state",
    "subscriber_count",
    "title",
    "topic_ids",
    "updated_at",
  ],
  expansions: [
    "creator_id",
    "host_ids",
    "invited_user_ids",
    "speaker_ids",
    "topic_ids",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  topicFields: ["description", "id", "name"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`[]<a id="ids-string"></a>

The list of Space IDs to return.

##### spaceFields: `string`[]<a id="spacefields-string"></a>

A comma separated list of Space fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### topicFields: `string`[]<a id="topicfields-string"></a>

A comma separated list of Topic fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2SpacesResponse](./models/get2-spaces-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/spaces` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.addOrDeleteRules`<a id="xtweetsaddordeleterules"></a>

Add or delete rules from a User's active rule set. Users can provide unique, optionally tagged rules to add. Users can delete their entire rule set or a subset specified by rule ids or values.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const addOrDeleteRulesResponse = await x.tweets.addOrDeleteRules({
  add: [
    {
      tag: "Non-retweeted coffee Tweets",
      value: "coffee -is:retweet",
    },
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### add: [`RuleNoId`](./models/rule-no-id.ts)[]<a id="add-rulenoidmodelsrule-no-idts"></a>

##### delete: [`DeleteRulesRequestDelete`](./models/delete-rules-request-delete.ts)<a id="delete-deleterulesrequestdeletemodelsdelete-rules-request-deletets"></a>

##### dryRun: `boolean`<a id="dryrun-boolean"></a>

Dry Run can be used with both the add and delete action, with the expected result given, but without actually taking any action in the system (meaning the end state will always be as it was when the request was submitted). This is particularly useful to validate rule changes.

#### 🔄 Return<a id="🔄-return"></a>

[AddOrDeleteRulesResponse](./models/add-or-delete-rules-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets/search/stream/rules` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.createTweet`<a id="xtweetscreatetweet"></a>

Causes the User to create a Tweet under the authorized account.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const createTweetResponse = await x.tweets.createTweet({
  for_super_followers_only: false,
  nullcast: false,
  quote_tweet_id: "1346889436626259968",
  reply_settings: "following",
  text: "Learn how to use the user Tweet timeline and user mention timeline endpoints in the Twitter API v2 to explore Tweet\\u2026 https:\\/\\/t.co\\/56a0vZUx7i",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### card_uri: `string`<a id="card_uri-string"></a>

Card Uri Parameter. This is mutually exclusive from Quote Tweet Id, Poll, Media, and Direct Message Deep Link.

##### direct_message_deep_link: `string`<a id="direct_message_deep_link-string"></a>

Link to take the conversation from the public timeline to a private Direct Message.

##### for_super_followers_only: `boolean`<a id="for_super_followers_only-boolean"></a>

Exclusive Tweet for super followers.

##### geo: [`TweetCreateRequestGeo`](./models/tweet-create-request-geo.ts)<a id="geo-tweetcreaterequestgeomodelstweet-create-request-geots"></a>

##### media: [`TweetCreateRequestMedia`](./models/tweet-create-request-media.ts)<a id="media-tweetcreaterequestmediamodelstweet-create-request-mediats"></a>

##### nullcast: `boolean`<a id="nullcast-boolean"></a>

Nullcasted (promoted-only) Tweets do not appear in the public timeline and are not served to followers.

##### poll: [`TweetCreateRequestPoll`](./models/tweet-create-request-poll.ts)<a id="poll-tweetcreaterequestpollmodelstweet-create-request-pollts"></a>

##### quote_tweet_id: `string`<a id="quote_tweet_id-string"></a>

Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

##### reply: [`TweetCreateRequestReply`](./models/tweet-create-request-reply.ts)<a id="reply-tweetcreaterequestreplymodelstweet-create-request-replyts"></a>

##### reply_settings: `string`<a id="reply_settings-string"></a>

Settings to indicate who can reply to the Tweet.

##### text: `string`<a id="text-string"></a>

The content of the Tweet.

#### 🔄 Return<a id="🔄-return"></a>

[TweetCreateResponse](./models/tweet-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.deleteById`<a id="xtweetsdeletebyid"></a>

Delete specified Tweet (in the path) by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const deleteByIdResponse = await x.tweets.deleteById({
  id: "1346889436626259968",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the Tweet to be deleted.

#### 🔄 Return<a id="🔄-return"></a>

[TweetDeleteResponse](./models/tweet-delete-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets/{id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.getBuyersList`<a id="xtweetsgetbuyerslist"></a>

Retrieves the list of Users who purchased a ticket to the given space

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBuyersListResponse = await x.tweets.getBuyersList({
  id: "1SLjjRYNejbKM",
  maxResults: 100,
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  expansions: ["pinned_tweet_id"],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the Space to be retrieved.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get a specified \'page\' of results.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2SpacesIdBuyersResponse](./models/get2-spaces-id-buyers-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/spaces/{id}/buyers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.getFilteredStream`<a id="xtweetsgetfilteredstream"></a>

Streams Tweets matching the stream's active rule set.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFilteredStreamResponse = await x.tweets.getFilteredStream({
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
  expansions: [
    "attachments.media_keys",
    "attachments.poll_ids",
    "author_id",
    "edit_history_tweet_ids",
    "entities.mentions.username",
    "geo.place_id",
    "in_reply_to_user_id",
    "referenced_tweets.id",
    "referenced_tweets.id.author_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  pollFields: [
    "duration_minutes",
    "end_datetime",
    "id",
    "options",
    "voting_status",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  placeFields: [
    "contained_within",
    "country",
    "country_code",
    "full_name",
    "geo",
    "id",
    "name",
    "place_type",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### backfillMinutes: `number`<a id="backfillminutes-number"></a>

The number of minutes of backfill requested.

##### startTime: `string`<a id="starttime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided.

##### endTime: `string`<a id="endtime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### pollFields: `string`[]<a id="pollfields-string"></a>

A comma separated list of Poll fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### placeFields: `string`[]<a id="placefields-string"></a>

A comma separated list of Place fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[FilteredStreamingTweetResponse](./models/filtered-streaming-tweet-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets/search/stream` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.getFirehoseStream`<a id="xtweetsgetfirehosestream"></a>

Streams 100% of public Tweets.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFirehoseStreamResponse = await x.tweets.getFirehoseStream({
  partition: 1,
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
  expansions: [
    "attachments.media_keys",
    "attachments.poll_ids",
    "author_id",
    "edit_history_tweet_ids",
    "entities.mentions.username",
    "geo.place_id",
    "in_reply_to_user_id",
    "referenced_tweets.id",
    "referenced_tweets.id.author_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  pollFields: [
    "duration_minutes",
    "end_datetime",
    "id",
    "options",
    "voting_status",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  placeFields: [
    "contained_within",
    "country",
    "country_code",
    "full_name",
    "geo",
    "id",
    "name",
    "place_type",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### partition: `number`<a id="partition-number"></a>

The partition number.

##### backfillMinutes: `number`<a id="backfillminutes-number"></a>

The number of minutes of backfill requested.

##### startTime: `string`<a id="starttime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided.

##### endTime: `string`<a id="endtime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### pollFields: `string`[]<a id="pollfields-string"></a>

A comma separated list of Poll fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### placeFields: `string`[]<a id="placefields-string"></a>

A comma separated list of Place fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[StreamingTweetResponse](./models/streaming-tweet-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets/firehose/stream` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.getLikedTweets`<a id="xtweetsgetlikedtweets"></a>

Returns a list of Tweets liked by the provided User ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getLikedTweetsResponse = await x.tweets.getLikedTweets({
  id: "2244994945",
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
  expansions: [
    "attachments.media_keys",
    "attachments.poll_ids",
    "author_id",
    "edit_history_tweet_ids",
    "entities.mentions.username",
    "geo.place_id",
    "in_reply_to_user_id",
    "referenced_tweets.id",
    "referenced_tweets.id.author_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  pollFields: [
    "duration_minutes",
    "end_datetime",
    "id",
    "options",
    "voting_status",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  placeFields: [
    "contained_within",
    "country",
    "country_code",
    "full_name",
    "geo",
    "id",
    "name",
    "place_type",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the User to lookup.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get the next \'page\' of results.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### pollFields: `string`[]<a id="pollfields-string"></a>

A comma separated list of Poll fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### placeFields: `string`[]<a id="placefields-string"></a>

A comma separated list of Place fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2UsersIdLikedTweetsResponse](./models/get2-users-id-liked-tweets-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/liked_tweets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.getMentionsById`<a id="xtweetsgetmentionsbyid"></a>

Returns Tweet objects that mention username associated to the provided User ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMentionsByIdResponse = await x.tweets.getMentionsById({
  id: "2244994945",
  sinceId: "1346889436626259968",
  untilId: "1346889436626259968",
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
  expansions: [
    "attachments.media_keys",
    "attachments.poll_ids",
    "author_id",
    "edit_history_tweet_ids",
    "entities.mentions.username",
    "geo.place_id",
    "in_reply_to_user_id",
    "referenced_tweets.id",
    "referenced_tweets.id.author_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  pollFields: [
    "duration_minutes",
    "end_datetime",
    "id",
    "options",
    "voting_status",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  placeFields: [
    "contained_within",
    "country",
    "country_code",
    "full_name",
    "geo",
    "id",
    "name",
    "place_type",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the User to lookup.

##### sinceId: `string`<a id="sinceid-string"></a>

The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.

##### untilId: `string`<a id="untilid-string"></a>

The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get the next \'page\' of results.

##### startTime: `string`<a id="starttime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.

##### endTime: `string`<a id="endtime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### pollFields: `string`[]<a id="pollfields-string"></a>

A comma separated list of Poll fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### placeFields: `string`[]<a id="placefields-string"></a>

A comma separated list of Place fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2UsersIdMentionsResponse](./models/get2-users-id-mentions-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/mentions` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.getQuoteTweets`<a id="xtweetsgetquotetweets"></a>

Returns a variety of information about each Tweet that quotes the Tweet specified by the requested ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getQuoteTweetsResponse = await x.tweets.getQuoteTweets({
  id: "1346889436626259968",
  maxResults: 10,
  exclude: ["replies", "retweets"],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
  expansions: [
    "attachments.media_keys",
    "attachments.poll_ids",
    "author_id",
    "edit_history_tweet_ids",
    "entities.mentions.username",
    "geo.place_id",
    "in_reply_to_user_id",
    "referenced_tweets.id",
    "referenced_tweets.id.author_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  pollFields: [
    "duration_minutes",
    "end_datetime",
    "id",
    "options",
    "voting_status",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  placeFields: [
    "contained_within",
    "country",
    "country_code",
    "full_name",
    "geo",
    "id",
    "name",
    "place_type",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

A single Tweet ID.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results to be returned.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get a specified \'page\' of results.

##### exclude: `string`[]<a id="exclude-string"></a>

The set of entities to exclude (e.g. \'replies\' or \'retweets\').

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### pollFields: `string`[]<a id="pollfields-string"></a>

A comma separated list of Poll fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### placeFields: `string`[]<a id="placefields-string"></a>

A comma separated list of Place fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2TweetsIdQuoteTweetsResponse](./models/get2-tweets-id-quote-tweets-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets/{id}/quote_tweets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.getRecentTweetCounts`<a id="xtweetsgetrecenttweetcounts"></a>

Returns Tweet Counts from the last 7 days that match a search query.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecentTweetCountsResponse = await x.tweets.getRecentTweetCounts({
  query: "(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet",
  sinceId: "1346889436626259968",
  untilId: "1346889436626259968",
  granularity: "hour",
  searchCountFields: ["end", "start", "tweet_count"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `string`<a id="query-string"></a>

One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.

##### startTime: `string`<a id="starttime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).

##### endTime: `string`<a id="endtime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).

##### sinceId: `string`<a id="sinceid-string"></a>

Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.

##### untilId: `string`<a id="untilid-string"></a>

Returns results with a Tweet ID less than (that is, older than) the specified ID.

##### nextToken: `string`<a id="nexttoken-string"></a>

This parameter is used to get the next \'page\' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get the next \'page\' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.

##### granularity: `'minute' | 'hour' | 'day'`<a id="granularity-minute--hour--day"></a>

The granularity for the search counts results.

##### searchCountFields: `string`[]<a id="searchcountfields-string"></a>

A comma separated list of SearchCount fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2TweetsCountsRecentResponse](./models/get2-tweets-counts-recent-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets/counts/recent` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.getRecentTweets`<a id="xtweetsgetrecenttweets"></a>

Returns Tweets from the last 7 days that match a search query.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRecentTweetsResponse = await x.tweets.getRecentTweets({
  query: "(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet",
  sinceId: "1346889436626259968",
  untilId: "1346889436626259968",
  maxResults: 10,
  sortOrder: "recency",
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
  expansions: [
    "attachments.media_keys",
    "attachments.poll_ids",
    "author_id",
    "edit_history_tweet_ids",
    "entities.mentions.username",
    "geo.place_id",
    "in_reply_to_user_id",
    "referenced_tweets.id",
    "referenced_tweets.id.author_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  pollFields: [
    "duration_minutes",
    "end_datetime",
    "id",
    "options",
    "voting_status",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  placeFields: [
    "contained_within",
    "country",
    "country_code",
    "full_name",
    "geo",
    "id",
    "name",
    "place_type",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `string`<a id="query-string"></a>

One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.

##### startTime: `string`<a id="starttime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).

##### endTime: `string`<a id="endtime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).

##### sinceId: `string`<a id="sinceid-string"></a>

Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.

##### untilId: `string`<a id="untilid-string"></a>

Returns results with a Tweet ID less than (that is, older than) the specified ID.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of search results to be returned by a request.

##### nextToken: `string`<a id="nexttoken-string"></a>

This parameter is used to get the next \'page\' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get the next \'page\' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.

##### sortOrder: `'recency' | 'relevancy'`<a id="sortorder-recency--relevancy"></a>

This order in which to return results.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### pollFields: `string`[]<a id="pollfields-string"></a>

A comma separated list of Poll fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### placeFields: `string`[]<a id="placefields-string"></a>

A comma separated list of Place fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2TweetsSearchRecentResponse](./models/get2-tweets-search-recent-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets/search/recent` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.getTweetCounts`<a id="xtweetsgettweetcounts"></a>

Returns Tweet Counts that match a search query.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTweetCountsResponse = await x.tweets.getTweetCounts({
  query: "(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet",
  sinceId: "1346889436626259968",
  untilId: "1346889436626259968",
  granularity: "hour",
  searchCountFields: ["end", "start", "tweet_count"],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `string`<a id="query-string"></a>

One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.

##### startTime: `string`<a id="starttime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp (from most recent 7 days) from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).

##### endTime: `string`<a id="endtime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).

##### sinceId: `string`<a id="sinceid-string"></a>

Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.

##### untilId: `string`<a id="untilid-string"></a>

Returns results with a Tweet ID less than (that is, older than) the specified ID.

##### nextToken: `string`<a id="nexttoken-string"></a>

This parameter is used to get the next \'page\' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get the next \'page\' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.

##### granularity: `'minute' | 'hour' | 'day'`<a id="granularity-minute--hour--day"></a>

The granularity for the search counts results.

##### searchCountFields: `string`[]<a id="searchcountfields-string"></a>

A comma separated list of SearchCount fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2TweetsCountsAllResponse](./models/get2-tweets-counts-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets/counts/all` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.getTweets`<a id="xtweetsgettweets"></a>

Retrieves Tweets shared in the specified Space.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getTweetsResponse = await x.tweets.getTweets({
  id: "1SLjjRYNejbKM",
  maxResults: 25,
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
  expansions: [
    "attachments.media_keys",
    "attachments.poll_ids",
    "author_id",
    "edit_history_tweet_ids",
    "entities.mentions.username",
    "geo.place_id",
    "in_reply_to_user_id",
    "referenced_tweets.id",
    "referenced_tweets.id.author_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  pollFields: [
    "duration_minutes",
    "end_datetime",
    "id",
    "options",
    "voting_status",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  placeFields: [
    "contained_within",
    "country",
    "country_code",
    "full_name",
    "geo",
    "id",
    "name",
    "place_type",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the Space to be retrieved.

##### maxResults: `number`<a id="maxresults-number"></a>

The number of Tweets to fetch from the provided space. If not provided, the value will default to the maximum of 100.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### pollFields: `string`[]<a id="pollfields-string"></a>

A comma separated list of Poll fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### placeFields: `string`[]<a id="placefields-string"></a>

A comma separated list of Place fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2SpacesIdTweetsResponse](./models/get2-spaces-id-tweets-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/spaces/{id}/tweets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.getUserHomeTimeline`<a id="xtweetsgetuserhometimeline"></a>

Returns Tweet objects that appears in the provided User ID's home timeline

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getUserHomeTimelineResponse = await x.tweets.getUserHomeTimeline({
  id: "2244994945",
  sinceId: "1346889436626259968",
  untilId: "1346889436626259968",
  exclude: ["replies", "retweets"],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
  expansions: [
    "attachments.media_keys",
    "attachments.poll_ids",
    "author_id",
    "edit_history_tweet_ids",
    "entities.mentions.username",
    "geo.place_id",
    "in_reply_to_user_id",
    "referenced_tweets.id",
    "referenced_tweets.id.author_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  pollFields: [
    "duration_minutes",
    "end_datetime",
    "id",
    "options",
    "voting_status",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  placeFields: [
    "contained_within",
    "country",
    "country_code",
    "full_name",
    "geo",
    "id",
    "name",
    "place_type",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the authenticated source User to list Reverse Chronological Timeline Tweets of.

##### sinceId: `string`<a id="sinceid-string"></a>

The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.

##### untilId: `string`<a id="untilid-string"></a>

The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get the next \'page\' of results.

##### exclude: `string`[]<a id="exclude-string"></a>

The set of entities to exclude (e.g. \'replies\' or \'retweets\').

##### startTime: `string`<a id="starttime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.

##### endTime: `string`<a id="endtime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### pollFields: `string`[]<a id="pollfields-string"></a>

A comma separated list of Poll fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### placeFields: `string`[]<a id="placefields-string"></a>

A comma separated list of Place fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2UsersIdTimelinesReverseChronologicalResponse](./models/get2-users-id-timelines-reverse-chronological-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/timelines/reverse_chronological` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.hideReply`<a id="xtweetshidereply"></a>

Hides or unhides a reply to an owned conversation.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const hideReplyResponse = await x.tweets.hideReply({
  tweetId: "1346889436626259968",
  hidden: true,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### hidden: `boolean`<a id="hidden-boolean"></a>

##### tweetId: `string`<a id="tweetid-string"></a>

The ID of the reply that you want to hide or unhide.

#### 🔄 Return<a id="🔄-return"></a>

[TweetHideResponse](./models/tweet-hide-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets/{tweet_id}/hidden` `PUT`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.likeTweet`<a id="xtweetsliketweet"></a>

Causes the User (in the path) to like the specified Tweet. The User in the path must match the User context authorizing the request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const likeTweetResponse = await x.tweets.likeTweet({
  id: "2244994945",
  tweet_id: "1346889436626259968",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tweet_id: `string`<a id="tweet_id-string"></a>

Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

##### id: `string`<a id="id-string"></a>

The ID of the authenticated source User that is requesting to like the Tweet.

#### 🔄 Return<a id="🔄-return"></a>

[UsersLikesCreateResponse](./models/users-likes-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/likes` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.listByListId`<a id="xtweetslistbylistid"></a>

Returns a list of Tweets associated with the provided List ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByListIdResponse = await x.tweets.listByListId({
  id: "1146654567674912769",
  maxResults: 100,
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
  expansions: [
    "attachments.media_keys",
    "attachments.poll_ids",
    "author_id",
    "edit_history_tweet_ids",
    "entities.mentions.username",
    "geo.place_id",
    "in_reply_to_user_id",
    "referenced_tweets.id",
    "referenced_tweets.id.author_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  pollFields: [
    "duration_minutes",
    "end_datetime",
    "id",
    "options",
    "voting_status",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  placeFields: [
    "contained_within",
    "country",
    "country_code",
    "full_name",
    "geo",
    "id",
    "name",
    "place_type",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the List.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get the next \'page\' of results.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### pollFields: `string`[]<a id="pollfields-string"></a>

A comma separated list of Poll fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### placeFields: `string`[]<a id="placefields-string"></a>

A comma separated list of Place fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2ListsIdTweetsResponse](./models/get2-lists-id-tweets-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/lists/{id}/tweets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.listByUserId`<a id="xtweetslistbyuserid"></a>

Returns a list of Tweets authored by the provided User ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listByUserIdResponse = await x.tweets.listByUserId({
  id: "2244994945",
  sinceId: "1346889436626259968",
  untilId: "1346889436626259968",
  exclude: ["replies", "retweets"],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
  expansions: [
    "attachments.media_keys",
    "attachments.poll_ids",
    "author_id",
    "edit_history_tweet_ids",
    "entities.mentions.username",
    "geo.place_id",
    "in_reply_to_user_id",
    "referenced_tweets.id",
    "referenced_tweets.id.author_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  pollFields: [
    "duration_minutes",
    "end_datetime",
    "id",
    "options",
    "voting_status",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  placeFields: [
    "contained_within",
    "country",
    "country_code",
    "full_name",
    "geo",
    "id",
    "name",
    "place_type",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the User to lookup.

##### sinceId: `string`<a id="sinceid-string"></a>

The minimum Tweet ID to be included in the result set. This parameter takes precedence over start_time if both are specified.

##### untilId: `string`<a id="untilid-string"></a>

The maximum Tweet ID to be included in the result set. This parameter takes precedence over end_time if both are specified.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get the next \'page\' of results.

##### exclude: `string`[]<a id="exclude-string"></a>

The set of entities to exclude (e.g. \'replies\' or \'retweets\').

##### startTime: `string`<a id="starttime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp from which the Tweets will be provided. The since_id parameter takes precedence if it is also specified.

##### endTime: `string`<a id="endtime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided. The until_id parameter takes precedence if it is also specified.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### pollFields: `string`[]<a id="pollfields-string"></a>

A comma separated list of Poll fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### placeFields: `string`[]<a id="placefields-string"></a>

A comma separated list of Place fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2UsersIdTweetsResponse](./models/get2-users-id-tweets-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/tweets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.lookupById`<a id="xtweetslookupbyid"></a>

Returns a variety of information about the Tweet specified by the requested ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const lookupByIdResponse = await x.tweets.lookupById({
  id: "1346889436626259968",
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
  expansions: [
    "attachments.media_keys",
    "attachments.poll_ids",
    "author_id",
    "edit_history_tweet_ids",
    "entities.mentions.username",
    "geo.place_id",
    "in_reply_to_user_id",
    "referenced_tweets.id",
    "referenced_tweets.id.author_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  pollFields: [
    "duration_minutes",
    "end_datetime",
    "id",
    "options",
    "voting_status",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  placeFields: [
    "contained_within",
    "country",
    "country_code",
    "full_name",
    "geo",
    "id",
    "name",
    "place_type",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

A single Tweet ID.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### pollFields: `string`[]<a id="pollfields-string"></a>

A comma separated list of Poll fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### placeFields: `string`[]<a id="placefields-string"></a>

A comma separated list of Place fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2TweetsIdResponse](./models/get2-tweets-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.lookupByTweetIds`<a id="xtweetslookupbytweetids"></a>

Returns a variety of information about the Tweet specified by the requested ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const lookupByTweetIdsResponse = await x.tweets.lookupByTweetIds({
  ids: ["1346889436626259968"],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
  expansions: [
    "attachments.media_keys",
    "attachments.poll_ids",
    "author_id",
    "edit_history_tweet_ids",
    "entities.mentions.username",
    "geo.place_id",
    "in_reply_to_user_id",
    "referenced_tweets.id",
    "referenced_tweets.id.author_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  pollFields: [
    "duration_minutes",
    "end_datetime",
    "id",
    "options",
    "voting_status",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  placeFields: [
    "contained_within",
    "country",
    "country_code",
    "full_name",
    "geo",
    "id",
    "name",
    "place_type",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`[]<a id="ids-string"></a>

A comma separated list of Tweet IDs. Up to 100 are allowed in a single request.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### pollFields: `string`[]<a id="pollfields-string"></a>

A comma separated list of Poll fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### placeFields: `string`[]<a id="placefields-string"></a>

A comma separated list of Place fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2TweetsResponse](./models/get2-tweets-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.retweetTweetById`<a id="xtweetsretweettweetbyid"></a>

Causes the User (in the path) to retweet the specified Tweet. The User in the path must match the User context authorizing the request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const retweetTweetByIdResponse = await x.tweets.retweetTweetById({
  id: "2244994945",
  tweet_id: "1346889436626259968",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### tweet_id: `string`<a id="tweet_id-string"></a>

Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

##### id: `string`<a id="id-string"></a>

The ID of the authenticated source User that is requesting to retweet the Tweet.

#### 🔄 Return<a id="🔄-return"></a>

[UsersRetweetsCreateResponse](./models/users-retweets-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/retweets` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.searchAll`<a id="xtweetssearchall"></a>

Returns Tweets that match a search query.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchAllResponse = await x.tweets.searchAll({
  query: "(from:TwitterDev OR from:TwitterAPI) has:media -is:retweet",
  sinceId: "1346889436626259968",
  untilId: "1346889436626259968",
  maxResults: 10,
  sortOrder: "recency",
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
  expansions: [
    "attachments.media_keys",
    "attachments.poll_ids",
    "author_id",
    "edit_history_tweet_ids",
    "entities.mentions.username",
    "geo.place_id",
    "in_reply_to_user_id",
    "referenced_tweets.id",
    "referenced_tweets.id.author_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  pollFields: [
    "duration_minutes",
    "end_datetime",
    "id",
    "options",
    "voting_status",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  placeFields: [
    "contained_within",
    "country",
    "country_code",
    "full_name",
    "geo",
    "id",
    "name",
    "place_type",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### query: `string`<a id="query-string"></a>

One query/rule/filter for matching Tweets. Refer to https://t.co/rulelength to identify the max query length.

##### startTime: `string`<a id="starttime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The oldest UTC timestamp from which the Tweets will be provided. Timestamp is in second granularity and is inclusive (i.e. 12:00:01 includes the first second of the minute).

##### endTime: `string`<a id="endtime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The newest, most recent UTC timestamp to which the Tweets will be provided. Timestamp is in second granularity and is exclusive (i.e. 12:00:01 excludes the first second of the minute).

##### sinceId: `string`<a id="sinceid-string"></a>

Returns results with a Tweet ID greater than (that is, more recent than) the specified ID.

##### untilId: `string`<a id="untilid-string"></a>

Returns results with a Tweet ID less than (that is, older than) the specified ID.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of search results to be returned by a request.

##### nextToken: `string`<a id="nexttoken-string"></a>

This parameter is used to get the next \'page\' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get the next \'page\' of results. The value used with the parameter is pulled directly from the response provided by the API, and should not be modified.

##### sortOrder: `'recency' | 'relevancy'`<a id="sortorder-recency--relevancy"></a>

This order in which to return results.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### pollFields: `string`[]<a id="pollfields-string"></a>

A comma separated list of Poll fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### placeFields: `string`[]<a id="placefields-string"></a>

A comma separated list of Place fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2TweetsSearchAllResponse](./models/get2-tweets-search-all-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets/search/all` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.searchStreamRules`<a id="xtweetssearchstreamrules"></a>

Returns rules from a User's active rule set. Users can fetch all of their rules or a subset, specified by the provided rule ids.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const searchStreamRulesResponse = await x.tweets.searchStreamRules({
  maxResults: 1000,
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`[]<a id="ids-string"></a>

A comma-separated list of Rule IDs.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This value is populated by passing the \'next_token\' returned in a request to paginate through results.

#### 🔄 Return<a id="🔄-return"></a>

[RulesLookupResponse](./models/rules-lookup-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets/search/stream/rules` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.streamSample`<a id="xtweetsstreamsample"></a>

Streams a deterministic 1% of public Tweets.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const streamSampleResponse = await x.tweets.streamSample({
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
  expansions: [
    "attachments.media_keys",
    "attachments.poll_ids",
    "author_id",
    "edit_history_tweet_ids",
    "entities.mentions.username",
    "geo.place_id",
    "in_reply_to_user_id",
    "referenced_tweets.id",
    "referenced_tweets.id.author_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  pollFields: [
    "duration_minutes",
    "end_datetime",
    "id",
    "options",
    "voting_status",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  placeFields: [
    "contained_within",
    "country",
    "country_code",
    "full_name",
    "geo",
    "id",
    "name",
    "place_type",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### backfillMinutes: `number`<a id="backfillminutes-number"></a>

The number of minutes of backfill requested.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### pollFields: `string`[]<a id="pollfields-string"></a>

A comma separated list of Poll fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### placeFields: `string`[]<a id="placefields-string"></a>

A comma separated list of Place fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[StreamingTweetResponse](./models/streaming-tweet-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets/sample/stream` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.streamSample10`<a id="xtweetsstreamsample10"></a>

Streams a deterministic 10% of public Tweets.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const streamSample10Response = await x.tweets.streamSample10({
  partition: 1,
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
  expansions: [
    "attachments.media_keys",
    "attachments.poll_ids",
    "author_id",
    "edit_history_tweet_ids",
    "entities.mentions.username",
    "geo.place_id",
    "in_reply_to_user_id",
    "referenced_tweets.id",
    "referenced_tweets.id.author_id",
  ],
  mediaFields: [
    "alt_text",
    "duration_ms",
    "height",
    "media_key",
    "non_public_metrics",
    "organic_metrics",
    "preview_image_url",
    "promoted_metrics",
    "public_metrics",
    "type",
    "url",
    "variants",
    "width",
  ],
  pollFields: [
    "duration_minutes",
    "end_datetime",
    "id",
    "options",
    "voting_status",
  ],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  placeFields: [
    "contained_within",
    "country",
    "country_code",
    "full_name",
    "geo",
    "id",
    "name",
    "place_type",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### partition: `number`<a id="partition-number"></a>

The partition number.

##### backfillMinutes: `number`<a id="backfillminutes-number"></a>

The number of minutes of backfill requested.

##### startTime: `string`<a id="starttime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The earliest UTC timestamp to which the Tweets will be provided.

##### endTime: `string`<a id="endtime-string"></a>

YYYY-MM-DDTHH:mm:ssZ. The latest UTC timestamp to which the Tweets will be provided.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### mediaFields: `string`[]<a id="mediafields-string"></a>

A comma separated list of Media fields to display.

##### pollFields: `string`[]<a id="pollfields-string"></a>

A comma separated list of Poll fields to display.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### placeFields: `string`[]<a id="placefields-string"></a>

A comma separated list of Place fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2TweetsSample10StreamResponse](./models/get2-tweets-sample10-stream-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets/sample10/stream` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.unlikeTweetById`<a id="xtweetsunliketweetbyid"></a>

Causes the User (in the path) to unlike the specified Tweet. The User must match the User context authorizing the request

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unlikeTweetByIdResponse = await x.tweets.unlikeTweetById({
  id: "2244994945",
  tweetId: "1346889436626259968",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the authenticated source User that is requesting to unlike the Tweet.

##### tweetId: `string`<a id="tweetid-string"></a>

The ID of the Tweet that the User is requesting to unlike.

#### 🔄 Return<a id="🔄-return"></a>

[UsersLikesDeleteResponse](./models/users-likes-delete-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/likes/{tweet_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.tweets.unretweetById`<a id="xtweetsunretweetbyid"></a>

Causes the User (in the path) to unretweet the specified Tweet. The User must match the User context authorizing the request

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unretweetByIdResponse = await x.tweets.unretweetById({
  id: "2244994945",
  sourceTweetId: "1346889436626259968",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the authenticated source User that is requesting to retweet the Tweet.

##### sourceTweetId: `string`<a id="sourcetweetid-string"></a>

The ID of the Tweet that the User is requesting to unretweet.

#### 🔄 Return<a id="🔄-return"></a>

[UsersRetweetsDeleteResponse](./models/users-retweets-delete-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/retweets/{source_tweet_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.users.blockUserById`<a id="xusersblockuserbyid"></a>

Causes the User (in the path) to block the target User. The User (in the path) must match the User context authorizing the request

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const blockUserByIdResponse = await x.users.blockUserById({
  id: "2244994945",
  target_user_id: "2244994945",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### target_user_id: `string`<a id="target_user_id-string"></a>

Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

##### id: `string`<a id="id-string"></a>

The ID of the authenticated source User that is requesting to block the target User.

#### 🔄 Return<a id="🔄-return"></a>

[BlockUserMutationResponse](./models/block-user-mutation-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/blocking` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.users.followUser`<a id="xusersfollowuser"></a>

Causes the User(in the path) to follow, or “request to follow” for protected Users, the target User. The User(in the path) must match the User context authorizing the request

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const followUserResponse = await x.users.followUser({
  id: "2244994945",
  target_user_id: "2244994945",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### target_user_id: `string`<a id="target_user_id-string"></a>

Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

##### id: `string`<a id="id-string"></a>

The ID of the authenticated source User that is requesting to follow the target User.

#### 🔄 Return<a id="🔄-return"></a>

[UsersFollowingCreateResponse](./models/users-following-create-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/following` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.users.getBlockedUsers`<a id="xusersgetblockedusers"></a>

Returns a list of Users that are blocked by the provided User ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getBlockedUsersResponse = await x.users.getBlockedUsers({
  id: "2244994945",
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  expansions: ["pinned_tweet_id"],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the authenticated source User for whom to return results.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get a specified \'page\' of results.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2UsersIdBlockingResponse](./models/get2-users-id-blocking-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/blocking` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.users.getFollowersById`<a id="xusersgetfollowersbyid"></a>

Returns a list of Users who are followers of the specified User ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFollowersByIdResponse = await x.users.getFollowersById({
  id: "2244994945",
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  expansions: ["pinned_tweet_id"],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the User to lookup.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get a specified \'page\' of results.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2UsersIdFollowersResponse](./models/get2-users-id-followers-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/followers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.users.getFollowersByListId`<a id="xusersgetfollowersbylistid"></a>

Returns a list of Users that follow a List by the provided List ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFollowersByListIdResponse = await x.users.getFollowersByListId({
  id: "1146654567674912769",
  maxResults: 100,
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  expansions: ["pinned_tweet_id"],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the List.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get a specified \'page\' of results.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2ListsIdFollowersResponse](./models/get2-lists-id-followers-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/lists/{id}/followers` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.users.getFollowingUsers`<a id="xusersgetfollowingusers"></a>

Returns a list of Users that are being followed by the provided User ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getFollowingUsersResponse = await x.users.getFollowingUsers({
  id: "2244994945",
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  expansions: ["pinned_tweet_id"],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the User to lookup.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get a specified \'page\' of results.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2UsersIdFollowingResponse](./models/get2-users-id-following-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/following` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.users.getMembersByListId`<a id="xusersgetmembersbylistid"></a>

Returns a list of Users that are members of a List by the provided List ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMembersByListIdResponse = await x.users.getMembersByListId({
  id: "1146654567674912769",
  maxResults: 100,
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  expansions: ["pinned_tweet_id"],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the List.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get a specified \'page\' of results.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2ListsIdMembersResponse](./models/get2-lists-id-members-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/lists/{id}/members` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.users.getMutedUsersById`<a id="xusersgetmutedusersbyid"></a>

Returns a list of Users that are muted by the provided User ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getMutedUsersByIdResponse = await x.users.getMutedUsersById({
  id: "2244994945",
  maxResults: 100,
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  expansions: ["pinned_tweet_id"],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the authenticated source User for whom to return results.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get the next \'page\' of results.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2UsersIdMutingResponse](./models/get2-users-id-muting-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/muting` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.users.getRetweetedByTweetIdUsers`<a id="xusersgetretweetedbytweetidusers"></a>

Returns a list of Users that have retweeted the provided Tweet ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const getRetweetedByTweetIdUsersResponse =
  await x.users.getRetweetedByTweetIdUsers({
    id: "1346889436626259968",
    maxResults: 100,
    userFields: [
      "created_at",
      "description",
      "entities",
      "id",
      "location",
      "name",
      "pinned_tweet_id",
      "profile_image_url",
      "protected",
      "public_metrics",
      "url",
      "username",
      "verified",
      "verified_type",
      "withheld",
    ],
    expansions: ["pinned_tweet_id"],
    tweetFields: [
      "attachments",
      "author_id",
      "context_annotations",
      "conversation_id",
      "created_at",
      "edit_controls",
      "edit_history_tweet_ids",
      "entities",
      "geo",
      "id",
      "in_reply_to_user_id",
      "lang",
      "non_public_metrics",
      "organic_metrics",
      "possibly_sensitive",
      "promoted_metrics",
      "public_metrics",
      "referenced_tweets",
      "reply_settings",
      "source",
      "text",
      "withheld",
    ],
  });
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

A single Tweet ID.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get the next \'page\' of results.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2TweetsIdRetweetedByResponse](./models/get2-tweets-id-retweeted-by-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets/{id}/retweeted_by` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.users.listLikingUsers`<a id="xuserslistlikingusers"></a>

Returns a list of Users that have liked the provided Tweet ID

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const listLikingUsersResponse = await x.users.listLikingUsers({
  id: "1346889436626259968",
  maxResults: 100,
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  expansions: ["pinned_tweet_id"],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

A single Tweet ID.

##### maxResults: `number`<a id="maxresults-number"></a>

The maximum number of results.

##### paginationToken: `string`<a id="paginationtoken-string"></a>

This parameter is used to get the next \'page\' of results.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2TweetsIdLikingUsersResponse](./models/get2-tweets-id-liking-users-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/tweets/{id}/liking_users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.users.lookupById`<a id="xuserslookupbyid"></a>

This endpoint returns information about a User. Specify User by ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const lookupByIdResponse = await x.users.lookupById({
  id: "2244994945",
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  expansions: ["pinned_tweet_id"],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### id: `string`<a id="id-string"></a>

The ID of the User to lookup.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2UsersIdResponse](./models/get2-users-id-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.users.lookupByIds`<a id="xuserslookupbyids"></a>

This endpoint returns information about Users. Specify Users by their ID.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const lookupByIdsResponse = await x.users.lookupByIds({
  ids: ["2244994945"],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  expansions: ["pinned_tweet_id"],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### ids: `string`[]<a id="ids-string"></a>

A list of User IDs, comma-separated. You can specify up to 100 IDs.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2UsersResponse](./models/get2-users-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.users.lookupByUsername`<a id="xuserslookupbyusername"></a>

This endpoint returns information about a User. Specify User by username.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const lookupByUsernameResponse = await x.users.lookupByUsername({
  username: "HqXzyC",
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  expansions: ["pinned_tweet_id"],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### username: `string`<a id="username-string"></a>

A username.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2UsersByUsernameUsernameResponse](./models/get2-users-by-username-username-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/by/username/{username}` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.users.lookupByUsernames`<a id="xuserslookupbyusernames"></a>

This endpoint returns information about Users. Specify Users by their username.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const lookupByUsernamesResponse = await x.users.lookupByUsernames({
  usernames: ["TwitterDev,TwitterAPI"],
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  expansions: ["pinned_tweet_id"],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### usernames: `string`[]<a id="usernames-string"></a>

A list of usernames, comma-separated.

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2UsersByResponse](./models/get2-users-by-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/by` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.users.lookupMe`<a id="xuserslookupme"></a>

This endpoint returns information about the requesting User.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const lookupMeResponse = await x.users.lookupMe({
  userFields: [
    "created_at",
    "description",
    "entities",
    "id",
    "location",
    "name",
    "pinned_tweet_id",
    "profile_image_url",
    "protected",
    "public_metrics",
    "url",
    "username",
    "verified",
    "verified_type",
    "withheld",
  ],
  expansions: ["pinned_tweet_id"],
  tweetFields: [
    "attachments",
    "author_id",
    "context_annotations",
    "conversation_id",
    "created_at",
    "edit_controls",
    "edit_history_tweet_ids",
    "entities",
    "geo",
    "id",
    "in_reply_to_user_id",
    "lang",
    "non_public_metrics",
    "organic_metrics",
    "possibly_sensitive",
    "promoted_metrics",
    "public_metrics",
    "referenced_tweets",
    "reply_settings",
    "source",
    "text",
    "withheld",
  ],
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### userFields: `string`[]<a id="userfields-string"></a>

A comma separated list of User fields to display.

##### expansions: `string`[]<a id="expansions-string"></a>

A comma separated list of fields to expand.

##### tweetFields: `string`[]<a id="tweetfields-string"></a>

A comma separated list of Tweet fields to display.

#### 🔄 Return<a id="🔄-return"></a>

[Get2UsersMeResponse](./models/get2-users-me-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/me` `GET`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.users.muteUserById`<a id="xusersmuteuserbyid"></a>

Causes the User (in the path) to mute the target User. The User (in the path) must match the User context authorizing the request.

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const muteUserByIdResponse = await x.users.muteUserById({
  id: "2244994945",
  target_user_id: "2244994945",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### target_user_id: `string`<a id="target_user_id-string"></a>

Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.

##### id: `string`<a id="id-string"></a>

The ID of the authenticated source User that is requesting to mute the target User.

#### 🔄 Return<a id="🔄-return"></a>

[MuteUserMutationResponse](./models/mute-user-mutation-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{id}/muting` `POST`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.users.unblockUserById`<a id="xusersunblockuserbyid"></a>

Causes the source User to unblock the target User. The source User must match the User context authorizing the request

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unblockUserByIdResponse = await x.users.unblockUserById({
  sourceUserId: "2244994945",
  targetUserId: "2244994945",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceUserId: `string`<a id="sourceuserid-string"></a>

The ID of the authenticated source User that is requesting to unblock the target User.

##### targetUserId: `string`<a id="targetuserid-string"></a>

The ID of the User that the source User is requesting to unblock.

#### 🔄 Return<a id="🔄-return"></a>

[BlockUserMutationResponse](./models/block-user-mutation-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{source_user_id}/blocking/{target_user_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.users.unfollowUser`<a id="xusersunfollowuser"></a>

Causes the source User to unfollow the target User. The source User must match the User context authorizing the request

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unfollowUserResponse = await x.users.unfollowUser({
  sourceUserId: "2244994945",
  targetUserId: "2244994945",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceUserId: `string`<a id="sourceuserid-string"></a>

The ID of the authenticated source User that is requesting to unfollow the target User.

##### targetUserId: `string`<a id="targetuserid-string"></a>

The ID of the User that the source User is requesting to unfollow.

#### 🔄 Return<a id="🔄-return"></a>

[UsersFollowingDeleteResponse](./models/users-following-delete-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{source_user_id}/following/{target_user_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


### `x.users.unmuteByUserId`<a id="xusersunmutebyuserid"></a>

Causes the source User to unmute the target User. The source User must match the User context authorizing the request

#### 🛠️ Usage<a id="🛠️-usage"></a>

```typescript
const unmuteByUserIdResponse = await x.users.unmuteByUserId({
  sourceUserId: "2244994945",
  targetUserId: "2244994945",
});
```

#### ⚙️ Parameters<a id="⚙️-parameters"></a>

##### sourceUserId: `string`<a id="sourceuserid-string"></a>

The ID of the authenticated source User that is requesting to unmute the target User.

##### targetUserId: `string`<a id="targetuserid-string"></a>

The ID of the User that the source User is requesting to unmute.

#### 🔄 Return<a id="🔄-return"></a>

[MuteUserMutationResponse](./models/mute-user-mutation-response.ts)

#### 🌐 Endpoint<a id="🌐-endpoint"></a>

`/2/users/{source_user_id}/muting/{target_user_id}` `DELETE`

[🔙 **Back to Table of Contents**](#table-of-contents)

---


## Author<a id="author"></a>
This TypeScript package is automatically generated by [Konfig](https://konfigthis.com)
