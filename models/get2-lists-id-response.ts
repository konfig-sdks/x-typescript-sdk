/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Expansions } from './expansions';
import { List } from './list';
import { Problem } from './problem';

/**
 * 
 * @export
 * @interface Get2ListsIdResponse
 */
export interface Get2ListsIdResponse {
    /**
     * 
     * @type {List}
     * @memberof Get2ListsIdResponse
     */
    'data'?: List;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof Get2ListsIdResponse
     */
    'errors'?: Array<Problem>;
    /**
     * 
     * @type {Expansions}
     * @memberof Get2ListsIdResponse
     */
    'includes'?: Expansions;
}
