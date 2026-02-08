import axios from './api/axiosconfig';
import { useEffect } from 'react';
import { asyncGetUsers } from './store/userActions';

const App = () => {
  useEffect(() => {
    asyncGetUsers();
  }, []);

  return <div>App</div>;
};

export default App;
