import { useForm } from 'react-hook-form';
import { nanoid } from 'nanoid';
import { useNavigate } from 'react-router-dom';
import { asyncCreateProduct } from '../store/actions/productActions';
import { useDispatch } from 'react-redux';

const CreateProduct = () => {
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const createProductHandler = (product) => {
    product.id = nanoid();
    dispatch(asyncCreateProduct(product));
    navigate('/products');
  };

  return (
    <div className="w-full mt-20 md:mt-40 flex justify-center items-center px-5">
      <form
        onSubmit={handleSubmit(createProductHandler)}
        className="w-full max-w-xl bg-white rounded-xl p-5"
      >
        <h1 className="text-center font-semibold text-md md:text-2xl mb-5 text-slate-950">
          Create Product
        </h1>
        <div className="w-full ">
          <label
            htmlFor="image"
            className="block text-slate-900 font-semibold mb-2 "
          >
            Image
          </label>
          <input
            className="w-full p-1.5 mb-2 rounded border-none outline-1 outline-gray-300 focus:outline-blue-500 text-slate-800"
            type="url"
            placeholder="Enter image url..."
            {...register('image')}
          />
        </div>
        <div className="w-full ">
          <label
            htmlFor="username"
            className="block text-slate-900 font-semibold mb-2 "
          >
            Title
          </label>
          <input
            className="w-full p-1.5 mb-2 rounded border-none outline-1 outline-gray-300 focus:outline-blue-500 text-slate-800"
            type="text"
            placeholder="Enter title..."
            {...register('title')}
          />
        </div>

        <div className=" flex flex-col gap-y-1">
          <div className="w-full ">
            <label
              htmlFor="price"
              className="block text-slate-900 font-semibold mb-2"
            >
              Price
            </label>
            <input
              className="w-full p-1.5 mb-2 rounded border-none outline-1 outline-gray-300 focus:outline-blue-500 text-slate-800"
              type="text"
              placeholder="Enter price..."
              {...register('price')}
            />
          </div>
          <div className="w-full ">
            <label
              htmlFor="description"
              className="block text-slate-900 font-semibold mb-2 "
            >
              Description
            </label>
            <textarea
              className="w-full p-1.5 mb-2 rounded border-none outline-1 outline-gray-300 focus:outline-blue-500 text-slate-800"
              placeholder="Enter Description..."
              {...register('description')}
            ></textarea>
          </div>
          <div className="w-full ">
            <label
              htmlFor="category"
              className="block text-slate-900 font-semibold mb-2"
            >
              Category
            </label>
            <input
              className="w-full p-1.5 mb-2 rounded border-none outline-1 outline-gray-300 focus:outline-blue-500 text-slate-800"
              type="text"
              placeholder="Enter category..."
              {...register('category')}
            />
          </div>
          <button className="w-full p-1.5 rounded border-none font-semibold bg-blue-500 hover:bg-blue-600 cursor-pointer mt-2.5">
            Create Product
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
