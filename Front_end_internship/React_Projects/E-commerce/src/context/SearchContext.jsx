import { useState, createContext } from 'react';

export const searchContext = createContext();

export const SeacrchContextData = ({ children }) => {
  const [search, setSearch] = useState('');
  return (
    <searchContext.Provider value={{ search, setSearch }}>
      {children}
    </searchContext.Provider>
  );
};
