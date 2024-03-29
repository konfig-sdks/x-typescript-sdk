/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Expansions } from './expansions';
import { Problem } from './problem';
import { User } from './user';

/**
 * 
 * @export
 * @interface Get2UsersMeResponse
 */
export interface Get2UsersMeResponse {
    /**
     * 
     * @type {User}
     * @memberof Get2UsersMeResponse
     */
    'data'?: User;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof Get2UsersMeResponse
     */
    'errors'?: Array<Problem>;
    /**
     * 
     * @type {Expansions}
     * @memberof Get2UsersMeResponse
     */
    'includes'?: Expansions;
}

