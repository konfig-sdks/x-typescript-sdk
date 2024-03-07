/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Promoted nonpublic engagement metrics for the Tweet at the time of the request.
 * @export
 * @interface TweetPromotedMetrics
 */
export interface TweetPromotedMetrics {
    /**
     * Number of times this Tweet has been viewed.
     * @type {number}
     * @memberof TweetPromotedMetrics
     */
    'impression_count'?: number;
    /**
     * Number of times this Tweet has been liked.
     * @type {number}
     * @memberof TweetPromotedMetrics
     */
    'like_count'?: number;
    /**
     * Number of times this Tweet has been replied to.
     * @type {number}
     * @memberof TweetPromotedMetrics
     */
    'reply_count'?: number;
    /**
     * Number of times this Tweet has been Retweeted.
     * @type {number}
     * @memberof TweetPromotedMetrics
     */
    'retweet_count'?: number;
}
