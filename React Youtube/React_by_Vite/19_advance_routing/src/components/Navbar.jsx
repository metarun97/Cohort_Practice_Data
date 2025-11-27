import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="">
      <div className="flex items-center justify-between p-6 bg-cyan-500">
        <h2 className="text-lg">Sheriyans</h2>
        <div className="flex items-center gap-4 text-lg">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/product">Product</Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
