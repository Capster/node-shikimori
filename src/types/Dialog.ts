import { MessageBasic } from "./message";
import { UserBasic } from "./user";

export interface Dialog {
  target_user: UserBasic,
  message: MessageBasic,
}
