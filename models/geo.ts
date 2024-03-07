/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Point } from './point';

/**
 * 
 * @export
 * @interface Geo
 */
export interface Geo {
    /**
     * 
     * @type {Array<number>}
     * @memberof Geo
     */
    'bbox': Array<number>;
    /**
     * 
     * @type {Point}
     * @memberof Geo
     */
    'geometry'?: Point;
    /**
     * 
     * @type {object}
     * @memberof Geo
     */
    'properties': object;
    /**
     * 
     * @type {string}
     * @memberof Geo
     */
    'type': GeoTypeEnum;
}

type GeoTypeEnum = 'Feature'


