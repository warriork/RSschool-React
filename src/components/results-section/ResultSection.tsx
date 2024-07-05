import React from 'react';
import styles from './ResultSection.module.scss';
import { Person } from '../../types.ts';

type Props = {
  people: Person[] | undefined;
};
export class ResultSection extends React.Component<Props> {
  render() {
    return (
      <div className={styles.results}>
        {this.props.people?.map((person) => (
          <div className={styles.result} key={person.name}>
            <h2>{person.name}</h2>
            <p>{`${person.gender} ${person.birth_year}`}</p>
          </div>
        ))}
      </div>
    );
  }
}
