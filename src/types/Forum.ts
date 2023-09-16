export type ForumId = number;

export interface Forum {
  id: ForumId,
  position: number,
  name: string,
  permalink: string,
  url: string,
}
