import { NavLink } from 'react-router-dom';
import '../scss/navbarstyle.scss';
import { MdRestaurantMenu } from "react-icons/md";

const Navbar = () => {
  return (
    <div className="nav">
      <h1>Foodify</h1>
      <div className="links">
        <NavLink className="link" to="/">
          Home
        </NavLink>
        <NavLink className="link" to="/recipes">
          Recipes
        </NavLink>
        <NavLink className="link" to="/about">
          About
        </NavLink>
        <NavLink className="link" to="/create-recipe">
          Create Recipe
        </NavLink>
      </div>
      <MdRestaurantMenu className='menu'/>
    </div>
  );
};

export default Navbar;
