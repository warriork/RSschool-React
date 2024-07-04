import React, { ChangeEvent } from 'react';
import styles from './SearchSection.module.scss';
type Person = {
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
type DataType = {
  count: number;
  next: 'string';
  results: Array<Person>;
} | null;

export class SearchSection extends React.Component {
  data: DataType = null;
  searchName: string = '';
  fetchData = async () => {
    const response = await fetch(
      `https://swapi.dev/api/people/?${this.searchName.length ? `name=${this.searchName}` : 'page=1'}`
    );
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }
    this.data = await response.json();
    console.log(this.data);
  };
  handleSubmit = async (e: React.FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    await this.fetchData();
  };
  render() {
    return (
      <section className={styles.searchFormContainer}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            onChange={(e: ChangeEvent<HTMLInputElement>) =>
              (this.searchName = e.target.value)
            }
          />
          <button type="submit">Search</button>
        </form>
      </section>
    );
  }
}
