import { DateTime } from "./common";

export interface ExternalLink {
  id: number | null,
  kind: string,
  url: string,
  source: string,
  entry_id: number,
  entry_type: string,
  created_at: DateTime | null,
  updated_at: DateTime | null,
  imported_at: DateTime | null,
}
