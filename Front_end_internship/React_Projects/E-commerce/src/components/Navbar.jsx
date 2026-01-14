import { useContext, useState } from 'react';
// import { GiShoppingCart } from 'react-icons/gi';
import mainLogo from '/logos/shopping-cart.png';
import { GiShoppingBag } from 'react-icons/gi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { RxCross1 } from 'react-icons/rx';
import { NavLink, useNavigate } from 'react-router-dom';
import { searchContext } from '../context/SearchContext';
import { cartContext } from '../context/CarContext';

const Navbar = () => {
  const [isOpen, setisOpen] = useState(false);
  const { search, setSearch } = useContext(searchContext);
  const { cart } = useContext(cartContext);

  const navigate = useNavigate();

  return (
    <nav className="w-full flex flex-col fixed top-0 right-0 left-0 backdrop-blur-xs">
      <div className="flex items-center justify-between px-4 py-2">
        {/* left part */}
        <div className="left flex items-center gap-x-0.5 text-2xl lg:text-3xl text-blue-700 font-bold">
          <h1 className="flex items-center gap-0 text-2xl lg:text-3xl text-blue-800 font-semibold">
            <img className="h-10" src={mainLogo} alt="" />
            <span className="text-[#E63946]">S</span>hop
            <span className="text-[#FCBF49]">Z</span>one
          </h1>
        </div>
        {/* center part */}
        <div className="center hidden lg:flex items-center gap-x-3.5 ">
          <NavLink className="text-xl text-blue-500" to="/">
            Home
          </NavLink>
          <NavLink className="text-xl text-blue-500" to="/products">
            Products
          </NavLink>
        </div>
        {/* right part */}
        <div className="right flex items-center gap-x-4">
          <div className="flex items-center gap-2">
            <input
              type="text"
              placeholder="Search..."
              className="hidden lg:block w-80% text-xl border-0 px-2.5 py-1.5 outline-0 ml-2.5 rounded-md bg-white"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
            <div className="relative">
              <GiShoppingBag
                className="text-2xl lg:text-3xl text-blue-800 cursor-pointer"
                onClick={() => navigate('/cart')}
              />
              <div className="absolute flex items-center justify-center w-4 h-4 text-sm rounded-full bottom-3 left-5 bg-[#E63946] text-white">
                {cart.length}
              </div>
            </div>
          </div>
          {/* Hamburger icon and cross icon */}
          <div className="mob-menu flex items-center gap-4 lg:hidden">
            {isOpen === false ? (
              <RxHamburgerMenu
                className="text-2xl text-blue-800 cursor-pointer"
                onClick={() => setisOpen(!isOpen)}
              />
            ) : (
              <RxCross1
                className="text-2xl text-blue-800 cursor-pointer"
                onClick={() => setisOpen(!isOpen)}
              />
            )}
          </div>
        </div>
      </div>
      {/* Mobile menu toggle functionality*/}
      {isOpen === true ? (
        <div className="moblist_searchInp flex flex-col px-2 py-4 gap-1.5 bg-blue-200 w-full top-12 lg:hidden">
          <input
            className="bg-amber-100 text-xl border-0 outline-0 px-1 py-1.5 rounded-sm"
            type="text"
            placeholder="Search..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
          <NavLink className="text-xl" to="/">
            Home
          </NavLink>
          <NavLink className="text-xl" to="/products">
            Products
          </NavLink>
        </div>
      ) : (
        ''
      )}
    </nav>
  );
};

export default Navbar;
