import { DateTime, Linkable, LinkedId, LinkedType } from "./common";
import { UserBasic } from "./User";

export type MessageId = number;
export type MessageKind = 'Private' | 'FriendRequest' | 'anons' | 'ongoing' | 'released';
export type MessageType = 'inbox' | 'private' | 'sent' | 'news' | 'notifications';

export interface Message<T extends Linkable = Linkable> {
  id: MessageId,
  kind: MessageKind,
  read: boolean,
  body: string,
  html_body: string,
  created_at: DateTime,
  linked_id: LinkedId,
  linked_type: LinkedType,
  linked: T | null,
  from: UserBasic,
  to: UserBasic,
}

/** @interface */
export type MessageBasic = Omit<Message, 'from' | 'to'>;
