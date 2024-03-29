/*
Twitter API v2

Twitter API v2 available endpoints

The version of the OpenAPI document: 2.62


NOTE: This file is auto generated by Konfig (https://konfigthis.com).
*/
import type * as buffer from "buffer"

import { ContextAnnotation } from './context-annotation';
import { FullTextEntities } from './full-text-entities';
import { ReplySettings } from './reply-settings';
import { TweetAttachments } from './tweet-attachments';
import { TweetEditControls } from './tweet-edit-controls';
import { TweetGeo } from './tweet-geo';
import { TweetNonPublicMetrics } from './tweet-non-public-metrics';
import { TweetOrganicMetrics } from './tweet-organic-metrics';
import { TweetPromotedMetrics } from './tweet-promoted-metrics';
import { TweetPublicMetrics } from './tweet-public-metrics';
import { TweetReferencedTweetsInner } from './tweet-referenced-tweets-inner';
import { TweetWithheld } from './tweet-withheld';

/**
 * 
 * @export
 * @interface Tweet
 */
export interface Tweet {
    /**
     * 
     * @type {TweetAttachments}
     * @memberof Tweet
     */
    'attachments'?: TweetAttachments;
    /**
     * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
     * @type {string}
     * @memberof Tweet
     */
    'author_id'?: string;
    /**
     * 
     * @type {Array<ContextAnnotation>}
     * @memberof Tweet
     */
    'context_annotations'?: Array<ContextAnnotation>;
    /**
     * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
     * @type {string}
     * @memberof Tweet
     */
    'conversation_id'?: string;
    /**
     * Creation time of the Tweet.
     * @type {string}
     * @memberof Tweet
     */
    'created_at'?: string;
    /**
     * 
     * @type {TweetEditControls}
     * @memberof Tweet
     */
    'edit_controls'?: TweetEditControls;
    /**
     * A list of Tweet Ids in this Tweet chain.
     * @type {Array<string>}
     * @memberof Tweet
     */
    'edit_history_tweet_ids': Array<string>;
    /**
     * 
     * @type {FullTextEntities}
     * @memberof Tweet
     */
    'entities'?: FullTextEntities;
    /**
     * 
     * @type {TweetGeo}
     * @memberof Tweet
     */
    'geo'?: TweetGeo;
    /**
     * Unique identifier of this Tweet. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
     * @type {string}
     * @memberof Tweet
     */
    'id': string;
    /**
     * Unique identifier of this User. This is returned as a string in order to avoid complications with languages and tools that cannot handle large integers.
     * @type {string}
     * @memberof Tweet
     */
    'in_reply_to_user_id'?: string;
    /**
     * Language of the Tweet, if detected by Twitter. Returned as a BCP47 language tag.
     * @type {string}
     * @memberof Tweet
     */
    'lang'?: string;
    /**
     * 
     * @type {TweetNonPublicMetrics}
     * @memberof Tweet
     */
    'non_public_metrics'?: TweetNonPublicMetrics;
    /**
     * 
     * @type {TweetOrganicMetrics}
     * @memberof Tweet
     */
    'organic_metrics'?: TweetOrganicMetrics;
    /**
     * Indicates if this Tweet contains URLs marked as sensitive, for example content suitable for mature audiences.
     * @type {boolean}
     * @memberof Tweet
     */
    'possibly_sensitive'?: boolean;
    /**
     * 
     * @type {TweetPromotedMetrics}
     * @memberof Tweet
     */
    'promoted_metrics'?: TweetPromotedMetrics;
    /**
     * 
     * @type {TweetPublicMetrics}
     * @memberof Tweet
     */
    'public_metrics'?: TweetPublicMetrics;
    /**
     * A list of Tweets this Tweet refers to. For example, if the parent Tweet is a Retweet, a Quoted Tweet or a Reply, it will include the related Tweet referenced to by its parent.
     * @type {Array<TweetReferencedTweetsInner>}
     * @memberof Tweet
     */
    'referenced_tweets'?: Array<TweetReferencedTweetsInner>;
    /**
     * Shows who can reply a Tweet. Fields returned are everyone, mentioned_users, and following.
     * @type {ReplySettings}
     * @memberof Tweet
     */
    'reply_settings'?: ReplySettings;
    /**
     * This is deprecated.
     * @type {string}
     * @memberof Tweet
     */
    'source'?: string;
    /**
     * The content of the Tweet.
     * @type {string}
     * @memberof Tweet
     */
    'text': string;
    /**
     * 
     * @type {TweetWithheld}
     * @memberof Tweet
     */
    'withheld'?: TweetWithheld;
}

