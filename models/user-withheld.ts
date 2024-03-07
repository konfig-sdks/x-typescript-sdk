/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Indicates withholding details for [withheld content](https://help.twitter.com/en/rules-and-policies/tweet-withheld-by-country).
 * @export
 * @interface UserWithheld
 */
export interface UserWithheld {
    /**
     * Provides a list of countries where this content is not available.
     * @type {Set<string>}
     * @memberof UserWithheld
     */
    'country_codes': Set<string>;
    /**
     * Indicates that the content being withheld is a `user`.
     * @type {string}
     * @memberof UserWithheld
     */
    'scope'?: UserWithheldScopeEnum;
}

type UserWithheldScopeEnum = 'user'

