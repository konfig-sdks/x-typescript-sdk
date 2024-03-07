/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Represent a boundary range (start and end index) for a recognized entity (for example a hashtag or a mention). `start` must be smaller than `end`.  The start index is inclusive, the end index is exclusive.
 * @export
 * @interface EntityIndicesInclusiveExclusive
 */
export interface EntityIndicesInclusiveExclusive {
    /**
     * Index (zero-based) at which position this entity ends.  The index is exclusive.
     * @type {number}
     * @memberof EntityIndicesInclusiveExclusive
     */
    'end': number;
    /**
     * Index (zero-based) at which position this entity starts.  The index is inclusive.
     * @type {number}
     * @memberof EntityIndicesInclusiveExclusive
     */
    'start': number;
}

