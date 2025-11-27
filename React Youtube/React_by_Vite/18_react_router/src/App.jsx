import { NavLink, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';

const App = () => {
  return (
    <div>
      <nav className="flex items-center justify-between p-5 bg-slate-500 text-white">
        <h1 className="text-2xl">Sheriyans</h1>
        <div className="flex items-center gap-5">
          <NavLink className="active:text-red-500" to="/">Home</NavLink>
          <NavLink className="active:text-red-500" to="/about">About</NavLink>
          <NavLink className="active:text-red-500" to="/contact">Contact</NavLink>
        </div>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;
