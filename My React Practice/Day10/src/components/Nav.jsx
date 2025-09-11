import { Link } from "react-router-dom";

const Nav = () => {
  return <div className="w-[95%] bg-slate-700 flex items-center justify-center text-2xl text-white gap-10 mx-auto p-6 rounded-2xl">
    <Link to="/">Home</Link>
    <Link to="/products">Products</Link>
    <Link to="/services">Services</Link>
    <Link to="/about">About</Link>
  </div>;
};

export default Nav;
