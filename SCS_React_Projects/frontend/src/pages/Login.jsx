import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { asyncLoginUser } from '../store/actions/userActions';
import { useDispatch } from 'react-redux';

const Login = () => {
  const { register, handleSubmit, reset } = useForm();
  const dispatch = useDispatch();

  const loginHandler = (user) => {
    console.log(user);
    dispatch(asyncLoginUser(user));
  };

  return (
    <div className="w-full mt-50 flex justify-center items-center px-5">
      <form
        onSubmit={handleSubmit(loginHandler)}
        className="w-full max-w-xl bg-white rounded-xl p-5"
      >
        <div className=" flex flex-col gap-y-1">
          <h1 className="text-center font-semibold text-md md:text-2xl mb-5 text-slate-950">
            Login
          </h1>
          <div className="w-full ">
            <label
              htmlFor="email"
              className="block text-slate-900 font-semibold mb-2 "
            >
              Email
            </label>
            <input
              className="w-full p-1.5 rounded border-none outline-1 outline-gray-300 focus:outline-blue-500 text-slate-800"
              type="email"
              placeholder="Enter your email..."
              {...register('email')}
            />
            <small className="text-red-500">Error</small>
          </div>
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
              placeholder="Enter your password..."
              {...register('password')}
            />
            <small className="text-red-500">Error</small>
          </div>
          <button className="w-full p-1.5 rounded border-none font-semibold bg-blue-500 hover:bg-blue-600 cursor-pointer mt-2.5">
            Login Now
          </button>
          <p className="text-slate-800 text-center mt-2 text-sm">
            Don't hava an account...?
            <Link className="text-blue-500" to="/register">
              Register
            </Link>
          </p>
        </div>
      </form>
    </div>
  );
};

export default Login;
