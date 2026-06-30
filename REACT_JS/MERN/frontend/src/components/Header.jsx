import { useState } from 'react';
import { Search, User, ShoppingCart, Menu, X } from 'lucide-react';
import { NavLink, useNavigate } from 'react-router-dom';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const navigate = useNavigate();

  return (
    <nav className="relative bg-white shadow-md px-4 sm:px-6 py-4">
      <div className="flex items-center justify-between">
        {/* Brand */}
        <div className="text-xl font-bold text-gray-800">ShopMart</div>

        {/* Center Links - Desktop */}
        <ul className="hidden md:flex items-center gap-8 text-gray-700 font-medium">
          <NavLink
            to="/"
            className="hover:text-blue-600 cursor-pointer transition-colors"
          >
            Home
          </NavLink>
          <NavLink
            to="/products"
            className="hover:text-blue-600 cursor-pointer transition-colors"
          >
            Products
          </NavLink>
          <NavLink
            to="about"
            className="hover:text-blue-600 cursor-pointer transition-colors"
          >
            About
          </NavLink>
        </ul>

        {/* Right Side - Desktop */}
        <div className="hidden md:flex items-center gap-4">
          <div className="flex items-center bg-gray-100 rounded-md px-3 py-1.5">
            <Search className="w-4 h-4 text-gray-500" />
            <input
              type="text"
              placeholder="Search..."
              className="bg-transparent outline-none px-2 text-sm w-40"
            />
          </div>
          <button className="text-gray-700 hover:text-blue-600 transition-colors">
            <User className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              navigate('/cart');
            }}
            className="text-gray-700 hover:text-blue-600 transition-colors"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
        </div>

        {/* Right Side - Mobile (search icon + cart + hamburger) */}
        <div className="flex items-center gap-3 md:hidden">
          <button
            onClick={() => setSearchOpen(!searchOpen)}
            className="text-gray-700"
          >
            <Search className="w-5 h-5" />
          </button>
          <button
            onClick={() => {
              navigate('/cart');
            }}
            className="text-gray-700"
          >
            <ShoppingCart className="w-5 h-5" />
          </button>
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700"
          >
            {menuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Search Bar (toggleable) */}
      {searchOpen && (
        <div className="mt-3 flex items-center bg-gray-100 rounded-full px-3 py-1.5 md:hidden">
          <Search className="w-4 h-4 text-gray-500" />
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent outline-none px-2 text-sm w-full"
          />
        </div>
      )}

      {/* Mobile Menu (dropdown) */}
      {menuOpen && (
        <div className="mt-4 flex flex-col gap-4 md:hidden">
          <ul className="flex flex-col gap-3 text-gray-700 font-medium">
            <li className="hover:text-blue-600 cursor-pointer transition-colors">
              Home
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">
              Products
            </li>
            <li className="hover:text-blue-600 cursor-pointer transition-colors">
              About
            </li>
          </ul>
          <div className="flex items-center gap-4 pt-2 border-t border-gray-200">
            <button className="flex items-center gap-2 text-gray-700">
              <User className="w-5 h-5" />
              <span className="text-sm">Account</span>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
