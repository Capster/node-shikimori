import { Linkable } from ".";
import { AnimeBasic } from "./anime";
import { CharacterBasic } from "./character";
import { Image, ImageSet } from "./image";
import { MangaBasic } from "./manga";
import { StyleId } from "./style";
import { TopicId } from "./topic";
import { UserBasic } from "./user";

export type ClubId = number;
export type ClubTopicPolicy = 'members' | 'admins';
export type ClubImageUploadPolicy = 'members' | 'admins';
export type ClubCommentPolicy = 'free' | 'members' | 'admins';
export type ClubJoinPolicy = 'free' | 'member_invite' | 'admin_invite' | 'owner_invite';

export interface Club {
  id: ClubId,
  name: string,
  logo: ImageSet,
  is_censored: boolean,
  join_policy: ClubJoinPolicy,
  comment_policy: ClubCommentPolicy,
  description: string | null,
  description_html: string | null,
  thread_id: number,
  topic_id: TopicId,
  user_role: string | null,
  style_id: StyleId | null,
  images: Image[],
  members: UserBasic[],
  animes: AnimeBasic[],
  mangas: MangaBasic[],
  characters: CharacterBasic[],
}

export type ClubBasic = Pick<Club, 'id' | 'name' | 'logo' | 'is_censored' | 'join_policy' | 'comment_policy'> & Linkable;
