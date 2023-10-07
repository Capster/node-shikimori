import { Linkable } from "./common";
import { AnimeBasic } from "./Anime";
import { CharacterBasic } from "./Character";
import { Image, ImageSet } from "./Image";
import { MangaBasic } from "./Manga";
import { StyleId } from "./Style";
import { TopicId } from "./Topic";
import { UserBasic } from "./User";

export type ClubId = number;
export type ClubTopicPolicy = 'members' | 'admins';
export type ClubImageUploadPolicy = 'members' | 'admins';
export type ClubCommentPolicy = 'free' | 'members' | 'admins';
export type ClubJoinPolicy = 'free' | 'member_invite' | 'admin_invite' | 'owner_invite';

export interface ClubUpdateTemplate {
  name?: string,
  description?: string | null,
  comment_policy?: ClubCommentPolicy,
  topic_policy?: ClubTopicPolicy,
  image_upload_policy?: ClubImageUploadPolicy,
}

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

/** @interface */
export type ClubBasic = Pick<Club, 'id' | 'name' | 'logo' | 'is_censored' | 'join_policy' | 'comment_policy'> & Linkable;
