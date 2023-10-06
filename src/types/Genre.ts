export type GenreId = number;
export type GenreEntryType = 'Anime' | 'Manga';

export interface Genre<T extends GenreEntryType = GenreEntryType> {
  id: GenreId,
  name: string,
  russian: string,
  kind: 'genre',
  entry_type: T,
}
