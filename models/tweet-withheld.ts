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
 * @interface TweetWithheld
 */
export interface TweetWithheld {
    /**
     * Indicates if the content is being withheld for on the basis of copyright infringement.
     * @type {boolean}
     * @memberof TweetWithheld
     */
    'copyright': boolean;
    /**
     * Provides a list of countries where this content is not available.
     * @type {Set<string>}
     * @memberof TweetWithheld
     */
    'country_codes': Set<string>;
    /**
     * Indicates whether the content being withheld is the `tweet` or a `user`.
     * @type {string}
     * @memberof TweetWithheld
     */
    'scope'?: TweetWithheldScopeEnum;
}

type TweetWithheldScopeEnum = 'tweet' | 'user'


