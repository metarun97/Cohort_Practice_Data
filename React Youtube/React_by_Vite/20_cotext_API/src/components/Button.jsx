import { useContext } from 'react';
import { ThemeContext } from './../context/DataContextFunc';

const Button = () => {
  const [theme, setTheme] = useContext(ThemeContext);

  const handleChangeTheme = () => {
    // console.log('hello');
    setTheme('dark');
    console.log(theme)
  };

  return (
    <>
      <button
        onClick={handleChangeTheme}
        className="px-5 py-2 bg-green-600 rounded text-white cursor-pointer m-2"
      >
        Change theme
      </button>
    </>
  );
};

export default Button;
