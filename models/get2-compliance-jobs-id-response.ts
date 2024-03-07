/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ComplianceJob } from './compliance-job';
import { Problem } from './problem';

/**
 * 
 * @export
 * @interface Get2ComplianceJobsIdResponse
 */
export interface Get2ComplianceJobsIdResponse {
    /**
     * 
     * @type {ComplianceJob}
     * @memberof Get2ComplianceJobsIdResponse
     */
    'data'?: ComplianceJob;
    /**
     * 
     * @type {Array<Problem>}
     * @memberof Get2ComplianceJobsIdResponse
     */
    'errors'?: Array<Problem>;
}
