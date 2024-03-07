/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Expansions } from './expansions';
import { Problem } from './problem';
import { Tweet } from './tweet';

/**
 * 
 * @export
 * @interface Get2TweetsResponse
 */
export interface Get2TweetsResponse {
    /**
     * 
     * @type {Array<Tweet>}
     * @memberof Get2TweetsResponse
     */
    'data'?: Array<Tweet>;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof Get2TweetsResponse
     */
    'errors'?: Array<Problem>;
    /**
     * 
     * @type {Expansions}
     * @memberof Get2TweetsResponse
     */
    'includes'?: Expansions;
}
