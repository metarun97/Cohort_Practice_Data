import { useContext } from 'react';
import { ThemeContext } from '../context/DataContextFunc';

const Navbar2 = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  return (
    <ul className="flex items-center gap-x-4 list-none">
      <li>Home</li>
      <li>Services</li>
      <li>About</li>
      <li>Contact</li>
      <li>{theme}</li>
    </ul>
  );
};

export default Navbar2;
