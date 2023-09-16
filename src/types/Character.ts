import { DateTime, Linkable } from ".";
import { AnimeBasic } from "./anime";
import { ImageSet } from "./image";
import { MangaBasic } from "./manga";
import { PersonBasic } from "./person";
import { TopicId } from "./topic";

export type RoleBased<T> = T & {
  role: string,
  roles: string[],
};

export type CharacterId = number;

export interface Character {
  id: CharacterId,
  name: string,
  russian: string,
  image: ImageSet,
  url: string,
  altname: string | null,
  japanese: string | null,
  description: string | null,
  description_html: string | null,
  description_source: string | null,
  favoured: boolean,
  thread_id: number,
  topic_id: TopicId,
  updated_at: DateTime,
  seyu: PersonBasic[],
  animes: RoleBased<AnimeBasic>[],
  mangas: RoleBased<MangaBasic>[],
}

export type CharacterBasic = Pick<Character, 'id' | 'name' | 'russian' | 'image' | 'url'> & Linkable;
