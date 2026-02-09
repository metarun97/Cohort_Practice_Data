import { useEffect } from 'react';
import { asyncGetUsers } from './store/userActions';
import { useDispatch, useSelector } from 'react-redux';

const App = () => {
  const data = useSelector((state) => state);
  const dispatch = useDispatch();
  console.log(data);
  useEffect(() => {
    dispatch(asyncGetUsers());
  }, []);

  return <div>App</div>;
};

export default App;
