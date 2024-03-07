/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { FullTextEntities } from './full-text-entities';
import { UserEntitiesUrl } from './user-entities-url';

/**
 * A list of metadata found in the User\'s profile description.
 * @export
 * @interface UserEntities
 */
export interface UserEntities {
    /**
     * 
     * @type {FullTextEntities}
     * @memberof UserEntities
     */
    'description'?: FullTextEntities;
    /**
     * 
     * @type {UserEntitiesUrl}
     * @memberof UserEntities
     */
    'url'?: UserEntitiesUrl;
}
