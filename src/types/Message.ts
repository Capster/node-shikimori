import { DateTime, Linkable, LinkedId, LinkedType } from ".";
import { UserBasic } from "./user";

export type MessageId = number;
export type MessageKind = 'Private' | 'FriendRequest' | 'anons' | 'ongoing' | 'released';

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

export type MessageBasic = Omit<Message, 'from' | 'to'>;
