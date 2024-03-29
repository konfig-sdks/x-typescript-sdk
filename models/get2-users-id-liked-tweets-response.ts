/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Expansions } from './expansions';
import { Get2DmConversationsIdDmEventsResponseMeta } from './get2-dm-conversations-id-dm-events-response-meta';
import { Problem } from './problem';
import { Tweet } from './tweet';

/**
 * 
 * @export
 * @interface Get2UsersIdLikedTweetsResponse
 */
export interface Get2UsersIdLikedTweetsResponse {
    /**
     * 
     * @type {Array<Tweet>}
     * @memberof Get2UsersIdLikedTweetsResponse
     */
    'data'?: Array<Tweet>;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof Get2UsersIdLikedTweetsResponse
     */
    'errors'?: Array<Problem>;
    /**
     * 
     * @type {Expansions}
     * @memberof Get2UsersIdLikedTweetsResponse
     */
    'includes'?: Expansions;
    /**
     * 
     * @type {Get2DmConversationsIdDmEventsResponseMeta}
     * @memberof Get2UsersIdLikedTweetsResponse
     */
    'meta'?: Get2DmConversationsIdDmEventsResponseMeta;
}

