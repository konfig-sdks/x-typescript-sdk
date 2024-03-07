/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ListCreateResponseData } from './list-create-response-data';
import { Problem } from './problem';

/**
 * 
 * @export
 * @interface ListCreateResponse
 */
export interface ListCreateResponse {
    /**
     * 
     * @type {ListCreateResponseData}
     * @memberof ListCreateResponse
     */
    'data'?: ListCreateResponseData;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof ListCreateResponse
     */
    'errors'?: Array<Problem>;
}

