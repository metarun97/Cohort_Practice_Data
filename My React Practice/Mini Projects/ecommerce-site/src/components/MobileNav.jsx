import { NavLink } from 'react-router-dom';
import '../SCSS/MobileNavStyle.scss';
import { RxCross2 } from 'react-icons/rx';

const MobileNav = () => {
  return (
    <div className="mobNav">
      <div className="lists">
        <RxCross2 className="cross" />
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
    </div>
  );
};

export default MobileNav;
