import { useContext } from 'react';
import Navbar from './components/Navbar';

import './index.css';
import { ThemeContext } from './context/DataContextFunc';

const App = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <div className={`w-full h-screen bg-black ${theme}`}>
      <Navbar />
    </div>
  );
};

export default App;
