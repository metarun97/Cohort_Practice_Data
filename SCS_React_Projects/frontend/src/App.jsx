import Nav from './components/Nav';
import MainRoutes from './routes/MainRoutes';

const App = () => {
  return (
    <div className="w-full min-h-screen bg-slate-700 text-white font-thin mx-auto">
      <Nav />
      <MainRoutes />
    </div>
  );
};

export default App;
