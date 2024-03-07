/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Expansions } from './expansions';
import { Get2UsersIdMentionsResponseMeta } from './get2-users-id-mentions-response-meta';
import { Problem } from './problem';
import { Tweet } from './tweet';

/**
 * 
 * @export
 * @interface Get2UsersIdMentionsResponse
 */
export interface Get2UsersIdMentionsResponse {
    /**
     * 
     * @type {Array<Tweet>}
     * @memberof Get2UsersIdMentionsResponse
     */
    'data'?: Array<Tweet>;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof Get2UsersIdMentionsResponse
     */
    'errors'?: Array<Problem>;
    /**
     * 
     * @type {Expansions}
     * @memberof Get2UsersIdMentionsResponse
     */
    'includes'?: Expansions;
    /**
     * 
     * @type {Get2UsersIdMentionsResponseMeta}
     * @memberof Get2UsersIdMentionsResponse
     */
    'meta'?: Get2UsersIdMentionsResponseMeta;
}

