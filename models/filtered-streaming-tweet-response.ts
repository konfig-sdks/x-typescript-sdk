/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Expansions } from './expansions';
import { FilteredStreamingTweetResponseMatchingRulesInner } from './filtered-streaming-tweet-response-matching-rules-inner';
import { Problem } from './problem';
import { Tweet } from './tweet';

/**
 * A Tweet or error that can be returned by the streaming Tweet API. The values returned with a successful streamed Tweet includes the user provided rules that the Tweet matched.
 * @export
 * @interface FilteredStreamingTweetResponse
 */
export interface FilteredStreamingTweetResponse {
    /**
     * 
     * @type {Tweet}
     * @memberof FilteredStreamingTweetResponse
     */
    'data'?: Tweet;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof FilteredStreamingTweetResponse
     */
    'errors'?: Array<Problem>;
    /**
     * 
     * @type {Expansions}
     * @memberof FilteredStreamingTweetResponse
     */
    'includes'?: Expansions;
    /**
     * The list of rules which matched the Tweet
     * @type {Array<FilteredStreamingTweetResponseMatchingRulesInner>}
     * @memberof FilteredStreamingTweetResponse
     */
    'matching_rules'?: Array<FilteredStreamingTweetResponseMatchingRulesInner>;
}
