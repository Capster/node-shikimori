import { DateTime, Linkable } from "./common";
import { AnimeBasic } from "./Anime";
import { CharacterBasic } from "./Character";
import { ImageSet } from "./Image";
import { MangaBasic } from "./Manga";
import { TopicId } from "./Topic";

export type PersonKind = 'seyu' | 'mangaka' | 'producer';
export type PersonVitalDay = Record<'day' | 'month' | 'year', number>;
export type PersonGroupedRole = [string, number];

export interface PersonRole {
  characters: CharacterBasic[],
  anime: AnimeBasic[],
}

export interface PersonWork {
  anime: AnimeBasic | null,
  manga: MangaBasic | null,
  role: string,
}

export type PersonId = number;

export interface Person {
  id: PersonId,
  name: string,
  russian: string,
  image: ImageSet,
  url: string,
  japanese: string,
  job_title: string,
  birth_on: PersonVitalDay | null,
  deceased_on: PersonVitalDay | null,
  website: string,
  groupped_roles: PersonGroupedRole[],
  roles: PersonRole[],
  works: PersonWork[],
  topic_id: TopicId | null,
  person_favoured: boolean,
  producer: boolean,
  producer_favoured: boolean,
  mangaka: boolean,
  mangaka_favoured: boolean,
  seyu: boolean,
  seyu_favoured: boolean,
  updated_at: DateTime,
  thread_id: number | null,
  birthday: PersonVitalDay | null,
}

export type PersonBasic = Pick<Person, 'id' | 'name' | 'russian' | 'image' | 'url'> & Linkable;
