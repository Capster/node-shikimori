import { MessageBasic } from "./Message";
import { UserBasic } from "./User";

export type DialogId = number;

export interface Dialog {
  target_user: UserBasic;
  message: MessageBasic;
}
