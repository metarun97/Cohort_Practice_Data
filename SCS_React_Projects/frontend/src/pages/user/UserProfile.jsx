import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  asyncDeleteUser,
  asyncUpdateUser,
} from '../../store/actions/userActions';

const UserProfile = () => {
  const { id } = useParams();
  const {
    userReducer: { users },
  } = useSelector((state) => state);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      username: users?.username,
      email: users?.email,
      password: users?.password,
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateUserHandler = (user) => {
    dispatch(asyncUpdateUser(users.id, user));
  };

  const deleteHandler = () => {
    dispatch(asyncDeleteUser(users.id));
    navigate('/login');
  };
  return users ? (
    <div className="w-full py-20 flex justify-center items-center px-5">
      <form
        onSubmit={handleSubmit(updateUserHandler)}
        className="w-full max-w-3xl bg-white rounded-xl p-5"
      >
        <h1 className="text-center font-semibold text-md md:text-2xl mb-5 text-slate-950">
          Update Product
        </h1>
        <div className="w-full ">
          <label
            htmlFor="username"
            className="block text-slate-900 font-semibold mb-2 "
          >
            Username
          </label>
          <input
            className="w-full p-1.5 mb-2 rounded border-none outline-1 outline-gray-300 focus:outline-blue-500 text-slate-800"
            type="text"
            placeholder="Enter username..."
            {...register('username')}
          />
        </div>
        <div className="w-full ">
          <label
            htmlFor="email"
            className="block text-slate-900 font-semibold mb-2 "
          >
            Email
          </label>
          <input
            className="w-full p-1.5 mb-2 rounded border-none outline-1 outline-gray-300 focus:outline-blue-500 text-slate-800"
            type="email"
            placeholder="Enter email..."
            {...register('email')}
          />
        </div>

        <div className=" flex flex-col gap-y-1">
          <div className="w-full ">
            <label
              htmlFor="password"
              className="block text-slate-900 font-semibold mb-2"
            >
              Passoword
            </label>
            <input
              className="w-full p-1.5 mb-2 rounded border-none outline-1 outline-gray-300 focus:outline-blue-500 text-slate-800"
              type="password"
              placeholder="Enter password..."
              {...register('password')}
            />
          </div>
          <div className="flex items-center gap-2">
            <button className="w-fit p-1.5 rounded border-none font-semibold bg-blue-500 hover:bg-blue-600 cursor-pointer mt-2.5">
              Update user
            </button>
            <button
              type="button"
              onClick={deleteHandler}
              className="w-fit p-1.5 rounded border-none font-semibold bg-red-500 hover:bg-red-600 cursor-pointer mt-2.5"
            >
              Delete user
            </button>
          </div>
        </div>
      </form>
    </div>
  ) : (
    'Loading...'
  );
};

export default UserProfile;
