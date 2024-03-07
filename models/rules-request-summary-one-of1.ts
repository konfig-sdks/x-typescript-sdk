/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * 
 * @export
 * @interface RulesRequestSummaryOneOf1
 */
export interface RulesRequestSummaryOneOf1 {
    /**
     * Number of user-specified stream filtering rules that were deleted.
     * @type {number}
     * @memberof RulesRequestSummaryOneOf1
     */
    'deleted': number;
    /**
     * Number of user-specified stream filtering rules that were not deleted.
     * @type {number}
     * @memberof RulesRequestSummaryOneOf1
     */
    'not_deleted': number;
}

