import { useEffect } from 'react';
import Nav from './components/Nav';
import MainRoutes from './routes/MainRoutes';
import { asyncCurrentUser } from './store/actions/userActions';
import { useDispatch } from 'react-redux';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-700 text-white mx-auto">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
