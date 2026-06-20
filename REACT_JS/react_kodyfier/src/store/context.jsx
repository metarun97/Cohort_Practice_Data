import { Children, createContext, useContext, useState } from 'react';

export const BioContext = createContext();

export const BioProvider = ({ children }) => {
  const [user, setUser] = useState('Tarun Upadhyay');
  const [age, setAge] = useState(31);
  return (
    <BioContext.Provider value={{ user, age }}>{children}</BioContext.Provider>
  );
};

// custom hook:-
export const useBio = () => {
  const context = useContext(BioContext);
  if (context === undefined) {
    throw new Error('Main componet shoul be wrapped by the BioProvider.');
  }
  return context;
};
