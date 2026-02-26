import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { Link, useNavigate } from 'react-router-dom';
import { asyncRegisterUser } from './../store/actions/userActions';
import { useDispatch } from 'react-redux';

const Register = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const registerHandler = (user) => {
    user.id = nanoid();
    user.isAdmin = false;
    user.cart = [];
    dispatch(asyncRegisterUser(user));
    navigate('/login');
  };

  return (
    <div className="w-full mt-20 md:mt-40 flex justify-center items-center px-5">
      <form
        onSubmit={handleSubmit(registerHandler)}
        className="w-full max-w-xl bg-white rounded-xl p-5"
      >
        <h1 className="text-center font-semibold text-md md:text-2xl mb-5 text-slate-950">
          Register
        </h1>
        <div className="w-full ">
          <label
            htmlFor="username"
            className="block text-slate-900 font-semibold mb-2 "
          >
            Username
          </label>
          <input
            className="w-full p-1.5 rounded border-none outline-1 outline-gray-300 focus:outline-blue-500 text-slate-800"
            type="text"
            placeholder="Enter username..."
            {...register('username')}
          />
          <small className="text-red-500">Error</small>
        </div>
        <div className="w-full ">
          <label
            htmlFor="username"
            className="block text-slate-900 font-semibold mb-2 "
          >
            Email
          </label>
          <input
            className="w-full p-1.5 rounded border-none outline-1 outline-gray-300 focus:outline-blue-500 text-slate-800"
            type="email"
            placeholder="Enter email..."
            {...register('email')}
          />
          <small className="text-red-500">Error</small>
        </div>
        <div className=" flex flex-col gap-y-1">
          <div className="w-full ">
            <label
              htmlFor="username"
              className="block text-slate-900 font-semibold mb-2"
            >
              Password
            </label>
            <input
              className="w-full p-1.5 rounded border-none outline-1 outline-gray-300 focus:outline-blue-500 text-slate-800"
              type="password"
              placeholder="Enter password..."
              {...register('password')}
            />
            <small className="text-red-500">Error</small>
          </div>
          <button className="w-full p-1.5 rounded border-none font-semibold bg-blue-500 hover:bg-blue-600 cursor-pointer mt-2.5">
            Register Now
          </button>
          <p className="text-slate-800 text-center mt-2 text-sm">
            Already hava an account...?
            <Link className="text-blue-500" to="/login">
              Login
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Register;
