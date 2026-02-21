import { useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import {
  asyncDeleteProduct,
  asyncUpdateProduct,
} from '../store/actions/productActions';

const ProductDetails = () => {
  const { id } = useParams();
  const {
    productReducer: { products },
    userReducer: { users },
  } = useSelector((state) => state);

  const product = products?.find((product) => product.id == id);
  console.log(product, users);

  const { register, handleSubmit, reset } = useForm({
    defaultValues: {
      image: product?.image,
      title: product?.title,
      price: product?.price,
      category: product?.category,
      description: product?.description,
    },
  });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const updateProductHandler = (product) => {
    dispatch(asyncUpdateProduct(id, product));
    navigate('/products');
  };

  const deleteHandler = () => {
    dispatch(asyncDeleteProduct(id));
    navigate('/products');
  };

  return product ? (
    <div>
      <div className="w-full h-screen flex ">
        <div className="image w-1/2">
          <div className="max-w-xl mx-auto aspect-square mt-20 bg-amber-50">
            <img
              src={product.image}
              className="w-full h-full object-cover"
              alt={product.title}
            />
          </div>
        </div>
        <div className="details w-1/2 ">
          <div className="max-w-xl mx-auto aspect-square mt-20 flex flex-col gap-y-2">
            <h1 className="text-3xl md:text-5xl font-semibold">
              {product.title}
            </h1>
            <h3 className="text-xl md:2xl font-bold">{product.price}</h3>
            <h1 className="text-lg md:text-xl">{product.description}</h1>
            <button className="px-6 py-3 w-fit bg-green-500 hover:bg-green-600 transition-all duration-200 rounded border-none text-white font-semibold cursor-pointer">
              Add to cart
            </button>
          </div>
        </div>
      </div>
      {users && users?.isAdmin && (
        <div className="w-full py-20 flex justify-center items-center px-5">
          <form
            onSubmit={handleSubmit(updateProductHandler)}
            className="w-full max-w-5xl bg-white rounded-xl p-5"
          >
            <h1 className="text-center font-semibold text-md md:text-2xl mb-5 text-slate-950">
              Update Product
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
                  type="number"
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
              <div className="flex items-center gap-2">
                <button className="w-fit p-1.5 rounded border-none font-semibold bg-blue-500 hover:bg-blue-600 cursor-pointer mt-2.5">
                  Update Product
                </button>
                <button
                  type="button"
                  onClick={deleteHandler}
                  className="w-fit p-1.5 rounded border-none font-semibold bg-red-500 hover:bg-red-600 cursor-pointer mt-2.5"
                >
                  Delete Product
                </button>
              </div>
            </div>
          </form>
        </div>
      )}
    </div>
  ) : (
    'loading...'
  );
};

export default ProductDetails;
