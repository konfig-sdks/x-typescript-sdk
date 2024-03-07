/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Problem } from './problem';
import { UsersFollowingCreateResponseData } from './users-following-create-response-data';

/**
 * 
 * @export
 * @interface UsersFollowingCreateResponse
 */
export interface UsersFollowingCreateResponse {
    /**
     * 
     * @type {UsersFollowingCreateResponseData}
     * @memberof UsersFollowingCreateResponse
     */
    'data'?: UsersFollowingCreateResponseData;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof UsersFollowingCreateResponse
     */
    'errors'?: Array<Problem>;
}

