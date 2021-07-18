import React from 'react';
import { SearchProvider } from './context/searchContext';
import Home from './pages/Home';
import { GlobalStyle } from './styles/global';

function App() {
  return (
    <>
      <SearchProvider>
        <Home />
        <GlobalStyle />
      </SearchProvider>
    </>
  );
}

export default App;
