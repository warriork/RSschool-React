import React, { ChangeEvent, FormEvent, ReactNode } from 'react';
import styles from './SearchSection.module.scss';

type Props = {
  fetchData: (param?: string | undefined) => Promise<void>;
};

type State = {
  searchName: string;
};

export class SearchSection extends React.Component<Props, State> {
  state: State = {
    searchName: '',
  };

  handleSubmit = async (e: FormEvent<HTMLFormElement>): Promise<void> => {
    e.preventDefault();
    localStorage.setItem('searchName', JSON.stringify(this.state.searchName));
    await this.props.fetchData(this.state.searchName);
  };

  handleInputChange = (e: ChangeEvent<HTMLInputElement>): void => {
    this.setState({ searchName: e.target.value });
  };

  componentDidMount() {
    const savedSearchName = localStorage.getItem('searchName');
    if (savedSearchName) {
      this.props.fetchData(JSON.parse(savedSearchName));
      this.setState({ searchName: JSON.parse(savedSearchName) });
    }
    this.props.fetchData();
  }

  render(): ReactNode {
    return (
      <section className={styles.searchFormContainer}>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            value={this.state.searchName}
            onChange={this.handleInputChange}
          />
          <button type="submit">Search</button>
        </form>
      </section>
    );
  }
}
