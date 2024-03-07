/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Problem } from './problem';
import { UsersLikesCreateResponseData } from './users-likes-create-response-data';

/**
 * 
 * @export
 * @interface UsersLikesDeleteResponse
 */
export interface UsersLikesDeleteResponse {
    /**
     * 
     * @type {UsersLikesCreateResponseData}
     * @memberof UsersLikesDeleteResponse
     */
    'data'?: UsersLikesCreateResponseData;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof UsersLikesDeleteResponse
     */
    'errors'?: Array<Problem>;
}

