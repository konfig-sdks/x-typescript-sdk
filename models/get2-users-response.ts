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
 * @interface Get2UsersResponse
 */
export interface Get2UsersResponse {
    /**
     * 
     * @type {Array<User>}
     * @memberof Get2UsersResponse
     */
    'data'?: Array<User>;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof Get2UsersResponse
     */
    'errors'?: Array<Problem>;
    /**
     * 
     * @type {Expansions}
     * @memberof Get2UsersResponse
     */
    'includes'?: Expansions;
}

