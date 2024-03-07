/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ListFollowedResponseData } from './list-followed-response-data';
import { Problem } from './problem';

/**
 * 
 * @export
 * @interface ListFollowedResponse
 */
export interface ListFollowedResponse {
    /**
     * 
     * @type {ListFollowedResponseData}
     * @memberof ListFollowedResponse
     */
    'data'?: ListFollowedResponseData;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof ListFollowedResponse
     */
    'errors'?: Array<Problem>;
}

