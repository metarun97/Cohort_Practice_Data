import { NavLink } from 'react-router-dom';
import '../SCSS/NavStyle.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { GiShoppingCart } from 'react-icons/gi';
import MobileNav from './MobileNav';

const Nav = () => {
  return (
    <>
      <div className="navbar">
        <h1>Productify</h1>
        <div className="lists">
          <NavLink className="link" to="/">
            Home
          </NavLink>
          <NavLink className="link" to="/products">
            Products
          </NavLink>
          <NavLink className="link" to="/about">
            About
          </NavLink>
        </div>
        <div className="search-cart">
          <input type="text" placeholder="Search items..." />
          <GiHamburgerMenu className="habBg" />
          <GiShoppingCart className="habCart" />
        </div>
      </div>
      <MobileNav className="mobNav"/>
    </>
  );
};

export default Nav;
