/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Specifies the type of attachments (if any) present in this Tweet.
 * @export
 * @interface TweetAttachments
 */
export interface TweetAttachments {
    /**
     * A list of Media Keys for each one of the media attachments (if media are attached).
     * @type {Array<string>}
     * @memberof TweetAttachments
     */
    'media_keys'?: Array<string>;
    /**
     * A list of poll IDs (if polls are attached).
     * @type {Array<string>}
     * @memberof TweetAttachments
     */
    'poll_ids'?: Array<string>;
}

