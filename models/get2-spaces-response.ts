/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Expansions } from './expansions';
import { Problem } from './problem';
import { Space } from './space';

/**
 * 
 * @export
 * @interface Get2SpacesResponse
 */
export interface Get2SpacesResponse {
    /**
     * 
     * @type {Array<Space>}
     * @memberof Get2SpacesResponse
     */
    'data'?: Array<Space>;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof Get2SpacesResponse
     */
    'errors'?: Array<Problem>;
    /**
     * 
     * @type {Expansions}
     * @memberof Get2SpacesResponse
     */
    'includes'?: Expansions;
}

