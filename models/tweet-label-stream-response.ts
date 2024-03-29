/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Problem } from './problem';
import { TweetComplianceStreamResponseOneOf1 } from './tweet-compliance-stream-response-one-of1';
import { TweetLabelData } from './tweet-label-data';
import { TweetLabelStreamResponseOneOf } from './tweet-label-stream-response-one-of';

/**
 * @type TweetLabelStreamResponse
 * Tweet label stream events.
 * @export
 */
export type TweetLabelStreamResponse = TweetComplianceStreamResponseOneOf1 | TweetLabelStreamResponseOneOf;


