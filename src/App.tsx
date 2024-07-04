import React from 'react';
import './App.css';

import { SearchSection } from './components/search-section/SearchSection.tsx';
import { ResultSection } from './components/results-section/ResultSection.tsx';

class App extends React.Component {
  render() {
    return (
      <main>
        <SearchSection />
        <ResultSection />
      </main>
    );
  }
}

export default App;
