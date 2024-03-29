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
import { User } from './user';

/**
 * 
 * @export
 * @interface Get2UsersIdMutingResponse
 */
export interface Get2UsersIdMutingResponse {
    /**
     * 
     * @type {Array<User>}
     * @memberof Get2UsersIdMutingResponse
     */
    'data'?: Array<User>;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof Get2UsersIdMutingResponse
     */
    'errors'?: Array<Problem>;
    /**
     * 
     * @type {Expansions}
     * @memberof Get2UsersIdMutingResponse
     */
    'includes'?: Expansions;
    /**
     * 
     * @type {Get2DmConversationsIdDmEventsResponseMeta}
     * @memberof Get2UsersIdMutingResponse
     */
    'meta'?: Get2DmConversationsIdDmEventsResponseMeta;
}

