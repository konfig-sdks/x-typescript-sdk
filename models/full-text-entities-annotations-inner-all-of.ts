/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Represents the data for the annotation.
 * @export
 * @interface FullTextEntitiesAnnotationsInnerAllOf
 */
export interface FullTextEntitiesAnnotationsInnerAllOf {
    /**
     * Text used to determine annotation.
     * @type {string}
     * @memberof FullTextEntitiesAnnotationsInnerAllOf
     */
    'normalized_text'?: string;
    /**
     * Confidence factor for annotation type.
     * @type {number}
     * @memberof FullTextEntitiesAnnotationsInnerAllOf
     */
    'probability'?: number;
    /**
     * Annotation type.
     * @type {string}
     * @memberof FullTextEntitiesAnnotationsInnerAllOf
     */
    'type'?: string;
}

