import { useEffect } from 'react';
import Nav from './components/Nav';
import MainRoutes from './routes/MainRoutes';
import { asyncCurrentUser } from './store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';
import { asyncLoadProducts } from './store/actions/productActions';

const App = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.userReducer);
  const { products } = useSelector((state) => state.productReducer);

  useEffect(() => {
    !users && dispatch(asyncCurrentUser());
  }, [users]);

  useEffect(() => {
    products.length == 0 && dispatch(asyncLoadProducts());
  }, [products]);

  return (
    <div className="w-full min-h-screen bg-slate-700 text-white mx-auto">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
