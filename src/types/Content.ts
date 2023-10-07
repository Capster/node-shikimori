import { ImageSet } from "./Image";
import { Publisher } from "./Publisher";
import { TopicId } from "./Topic";
import { UserRateBasic } from "./UserRate";

export interface RateStatusStat {
  name: string,
  value: number,
}

/** @interface */
export type RateScoreStat = Record<'name' | 'value', number>;
export type Day = string;

export interface Content {
  name: string,
  russian: string,
  image: ImageSet,
  url: string,
  score: string,
  aired_on: Day | null,
  released_on: Day | null,
  english: string[] | [null],
  japanese: string[] | [null],
  synonims: string[] | [null],
  license_name_ru: string | null,
  description: string | null,
  description_html: string | null,
  description_source: string | null,
  franchise: string | null,
  favoured: boolean,
  anons: boolean,
  ongoing: boolean,
  thread_id: number,
  topic_id: TopicId,
  myanimelist_id: number,
  rates_scores_stats: RateScoreStat[],
  rates_statuses_stats: RateStatusStat[],
  licensors: string[],
  publishers: Publisher[],
  user_rate: UserRateBasic | null,
}

export interface ContentRelation {
  relation: string,
  relation_string: string,
}

