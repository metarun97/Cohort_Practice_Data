import Nav from './components/Nav';
import Mainroute from './routes/Mainroute';

const App = () => {
  return (
    <div className="w-screen h-screen bg-slate-600 text-white px-5">
      <Nav />
      <Mainroute />
    </div>
  );
};

export default App;
