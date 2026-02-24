import { useSelector } from 'react-redux';
import { NavLink, useNavigate } from 'react-router-dom';

const Nav = () => {
  const users = useSelector((state) => state.userReducer.users);

  return (
    <nav className="flex items-center justify-center gap-x-5 p-5">
      <NavLink to="/">Home</NavLink>
      {users ? (
        <>
          {users && users?.isAdmin && (
            <NavLink to="/admin/create-product">Create Product</NavLink>
          )}
          <NavLink to="/admin/user-profile">Settings</NavLink>
        </>
      ) : (
        <>
          <NavLink to="/login">Login</NavLink>
        </>
      )}
    </nav>
  );
};

export default Nav;
