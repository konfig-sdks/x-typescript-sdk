/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { Problem } from './problem';
import { ResourceUnauthorizedProblemAllOf } from './resource-unauthorized-problem-all-of';

/**
 * @type ResourceUnauthorizedProblem
 * A problem that indicates you are not allowed to see a particular Tweet, User, etc.
 * @export
 */
export type ResourceUnauthorizedProblem = Problem & ResourceUnauthorizedProblemAllOf;

