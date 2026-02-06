import axios from './api/axiosconfig';
import { useEffect } from 'react';

const App = () => {
  const getData = async () => {
    try {
      const res = await axios.get('products');
      console.log(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return <div>App</div>;
};

export default App;
