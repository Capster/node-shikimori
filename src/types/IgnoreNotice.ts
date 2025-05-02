import { TopicId } from "./Topic";

export interface IgnoreNotice {
  topic_id: TopicId;
  is_ignored: boolean;
}
