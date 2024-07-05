export type Person = {
  birth_year: string;
  created: string;
  edited: string;
  eye_color: string;
  films: Array<string>;
  gender: string;
  hair_color: string;
  height: string;
  homeworld: string;
  mass: string;
  name: string;
  skin_color: string;
  species: Array<string>;
  starships: Array<string>;
  urls: string;
  vehicles: Array<string>;
};
export type DataType =
  | {
      count: number;
      next: 'string';
      results: Array<Person>;
    }
  | undefined;
