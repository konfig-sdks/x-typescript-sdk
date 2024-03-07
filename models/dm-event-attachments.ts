/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"


/**
 * Specifies the type of attachments (if any) present in this DM.
 * @export
 * @interface DmEventAttachments
 */
export interface DmEventAttachments {
    /**
     * A list of card IDs (if cards are attached).
     * @type {Array<string>}
     * @memberof DmEventAttachments
     */
    'card_ids'?: Array<string>;
    /**
     * A list of Media Keys for each one of the media attachments (if media are attached).
     * @type {Array<string>}
     * @memberof DmEventAttachments
     */
    'media_keys'?: Array<string>;
}
