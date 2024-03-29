/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { CashtagEntity } from './cashtag-entity';
import { FullTextEntitiesAnnotationsInner } from './full-text-entities-annotations-inner';
import { HashtagEntity } from './hashtag-entity';
import { MentionEntity } from './mention-entity';
import { UrlEntity } from './url-entity';

/**
 * 
 * @export
 * @interface FullTextEntities
 */
export interface FullTextEntities {
    /**
     * 
     * @type {Array<FullTextEntitiesAnnotationsInner>}
     * @memberof FullTextEntities
     */
    'annotations'?: Array<FullTextEntitiesAnnotationsInner>;
    /**
     * 
     * @type {Array<CashtagEntity>}
     * @memberof FullTextEntities
     */
    'cashtags'?: Array<CashtagEntity>;
    /**
     * 
     * @type {Array<HashtagEntity>}
     * @memberof FullTextEntities
     */
    'hashtags'?: Array<HashtagEntity>;
    /**
     * 
     * @type {Array<MentionEntity>}
     * @memberof FullTextEntities
     */
    'mentions'?: Array<MentionEntity>;
    /**
     * 
     * @type {Array<UrlEntity>}
     * @memberof FullTextEntities
     */
    'urls'?: Array<UrlEntity>;
}

