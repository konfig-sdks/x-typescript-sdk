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
 * @interface Get2SpacesIdResponse
 */
export interface Get2SpacesIdResponse {
    /**
     * 
     * @type {Space}
     * @memberof Get2SpacesIdResponse
     */
    'data'?: Space;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof Get2SpacesIdResponse
     */
    'errors'?: Array<Problem>;
    /**
     * 
     * @type {Expansions}
     * @memberof Get2SpacesIdResponse
     */
    'includes'?: Expansions;
}

