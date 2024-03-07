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
 * @interface Get2ListsIdMembersResponse
 */
export interface Get2ListsIdMembersResponse {
    /**
     * 
     * @type {Array<User>}
     * @memberof Get2ListsIdMembersResponse
     */
    'data'?: Array<User>;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof Get2ListsIdMembersResponse
     */
    'errors'?: Array<Problem>;
    /**
     * 
     * @type {Expansions}
     * @memberof Get2ListsIdMembersResponse
     */
    'includes'?: Expansions;
    /**
     * 
     * @type {Get2DmConversationsIdDmEventsResponseMeta}
     * @memberof Get2ListsIdMembersResponse
     */
    'meta'?: Get2DmConversationsIdDmEventsResponseMeta;
}

