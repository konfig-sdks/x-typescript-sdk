/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { TweetComplianceSchemaTweet } from './tweet-compliance-schema-tweet';

/**
 * 
 * @export
 * @interface TweetUnviewable
 */
export interface TweetUnviewable {
    /**
     * If the label is being applied or removed. Possible values are ‘apply’ or ‘remove’.
     * @type {string}
     * @memberof TweetUnviewable
     */
    'application': string;
    /**
     * Event time.
     * @type {string}
     * @memberof TweetUnviewable
     */
    'event_at': string;
    /**
     * 
     * @type {TweetComplianceSchemaTweet}
     * @memberof TweetUnviewable
     */
    'tweet': TweetComplianceSchemaTweet;
}

