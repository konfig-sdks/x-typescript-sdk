/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ListUpdateResponseData } from './list-update-response-data';
import { Problem } from './problem';

/**
 * 
 * @export
 * @interface ListUpdateResponse
 */
export interface ListUpdateResponse {
    /**
     * 
     * @type {ListUpdateResponseData}
     * @memberof ListUpdateResponse
     */
    'data'?: ListUpdateResponseData;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof ListUpdateResponse
     */
    'errors'?: Array<Problem>;
}

