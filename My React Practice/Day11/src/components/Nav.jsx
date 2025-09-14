import { NavLink } from 'react-router-dom';

const Nav = () => {
  return (
    <div className="w-[95%] flex items-center justify-center gap-5 bg-slate-500 mx-auto p-5 text-xl">
      <NavLink className={(e) => (e.isActive ? 'text-red-500' : '')} to="/">
        Home
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? 'text-red-500' : '')}
        to="/products"
      >
        Products
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? 'text-red-500' : '')}
        to="/services"
      >
        Services
      </NavLink>
      <NavLink
        className={(e) => (e.isActive ? 'text-red-500' : '')}
        to="/about"
      >
        About
      </NavLink>
    </div>
  );
};

export default Nav;
