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
 * @interface Get2UsersIdMentionsResponseMeta
 */
export interface Get2UsersIdMentionsResponseMeta {
    /**
     * The newest id in this response.
     * @type {string}
     * @memberof Get2UsersIdMentionsResponseMeta
     */
    'newest_id'?: string;
    /**
     * The next token.
     * @type {string}
     * @memberof Get2UsersIdMentionsResponseMeta
     */
    'next_token'?: string;
    /**
     * The oldest id in this response.
     * @type {string}
     * @memberof Get2UsersIdMentionsResponseMeta
     */
    'oldest_id'?: string;
    /**
     * The previous token.
     * @type {string}
     * @memberof Get2UsersIdMentionsResponseMeta
     */
    'previous_token'?: string;
    /**
     * The number of results returned in this response.
     * @type {number}
     * @memberof Get2UsersIdMentionsResponseMeta
     */
    'result_count'?: number;
}

