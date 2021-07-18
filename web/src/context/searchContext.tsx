import React, { useState, createContext, useContext } from 'react';

export const SearchContext = createContext<{
  search: string;
  setSearch: (value: React.SetStateAction<string>) => void;
}>({
  search: '',
  setSearch: () => {},
});

export const useSearchContext = () => useContext(SearchContext);

export const SearchProvider: React.FC = ({ children }) => {
  const [search, setSearch] = useState<string>('');
  return (
    <SearchContext.Provider value={{ search, setSearch }}>
      {children}
    </SearchContext.Provider>
  );
};
