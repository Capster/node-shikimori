import { DateTime } from ".";

export type StyleId = number;

export interface Style {
  id: StyleId | null
  owner_id: number | null,
  owner_type: 'User' | 'Club' | null,
  name: string,
  css: string,
  compiled_css: string,
  created_at: DateTime | null,
  updated_at: DateTime | null,
}
