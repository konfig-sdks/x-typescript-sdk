/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { MuteUserMutationResponseData } from './mute-user-mutation-response-data';
import { Problem } from './problem';

/**
 * 
 * @export
 * @interface MuteUserMutationResponse
 */
export interface MuteUserMutationResponse {
    /**
     * 
     * @type {MuteUserMutationResponseData}
     * @memberof MuteUserMutationResponse
     */
    'data'?: MuteUserMutationResponseData;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof MuteUserMutationResponse
     */
    'errors'?: Array<Problem>;
}

