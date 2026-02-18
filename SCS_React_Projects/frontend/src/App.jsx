import { useEffect } from 'react';
import Nav from './components/Nav';
import MainRoutes from './routes/MainRoutes';
import { asyncCurrentUser } from './store/actions/userActions';
import { useDispatch } from 'react-redux';
import { asyncLoadProducts } from './store/actions/productActions';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(asyncCurrentUser());
    dispatch(asyncLoadProducts());
  }, []);

  return (
    <div className="w-full min-h-screen bg-slate-700 text-white mx-auto">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
