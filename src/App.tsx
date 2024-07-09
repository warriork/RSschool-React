import React from 'react';
import './App.css';

import { SearchSection } from './components/search-section/SearchSection.tsx';
import { ResultSection } from './components/results-section/ResultSection.tsx';
import { DataType } from './types.ts';
import ErrorBoundary from './components/error-boundary/ErrorBoundary.tsx';
import { ErrorBtn } from './components/error-button/ErrorBtn.tsx';

type AppState = {
  data: DataType | null;
};

class App extends React.Component<null, AppState> {
  state: AppState = {
    data: null,
  };

  fetchData = async (searchName?: string): Promise<void> => {
    try {
      const response = await fetch(
        `https://swapi.dev/api/people/?${searchName && searchName.length ? `search=${searchName}` : 'page=1'}`
      );
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
      const data = await response.json();
      this.setState({ data });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };
  render() {
    const { data } = this.state;

    return (
      <ErrorBoundary>
        <ErrorBtn />
        <SearchSection fetchData={this.fetchData} />
        <ResultSection people={data?.results} />
      </ErrorBoundary>
    );
  }
}

export default App;
