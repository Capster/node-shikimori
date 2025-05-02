import { CharacterBasic } from "./Character";
import { PersonBasic } from "./Person";

export interface Role {
  roles: string[];
  roles_russian: string[];
  character: CharacterBasic | null;
  person: PersonBasic | null;
}
