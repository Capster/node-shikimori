export type StudioId = number;

export interface Studio {
  id: StudioId;
  name: string;
  filtered_name: string;
  real: boolean;
  image: string | null;
}
