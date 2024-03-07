/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * A summary of the results of the addition of user-specified stream filtering rules.
 * @export
 * @interface RulesRequestSummaryOneOf
 */
export interface RulesRequestSummaryOneOf {
    /**
     * Number of user-specified stream filtering rules that were created.
     * @type {number}
     * @memberof RulesRequestSummaryOneOf
     */
    'created': number;
    /**
     * Number of invalid user-specified stream filtering rules.
     * @type {number}
     * @memberof RulesRequestSummaryOneOf
     */
    'invalid': number;
    /**
     * Number of user-specified stream filtering rules that were not created.
     * @type {number}
     * @memberof RulesRequestSummaryOneOf
     */
    'not_created': number;
    /**
     * Number of valid user-specified stream filtering rules.
     * @type {number}
     * @memberof RulesRequestSummaryOneOf
     */
    'valid': number;
}
