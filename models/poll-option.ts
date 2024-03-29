/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Describes a choice in a Poll object.
 * @export
 * @interface PollOption
 */
export interface PollOption {
    /**
     * The text of a poll choice.
     * @type {string}
     * @memberof PollOption
     */
    'label': string;
    /**
     * Position of this choice in the poll.
     * @type {number}
     * @memberof PollOption
     */
    'position': number;
    /**
     * Number of users who voted for this choice.
     * @type {number}
     * @memberof PollOption
     */
    'votes': number;
}

