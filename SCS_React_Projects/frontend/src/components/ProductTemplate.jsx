import { Link } from 'react-router-dom';
import { asyncUpdateUser } from '../store/actions/userActions';
import { useDispatch, useSelector } from 'react-redux';

const ProductTemplate = ({ product }) => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);

  const addToCartHandler = (product) => {
    const copyUser = { ...users, cart: [...users.cart] };
    const Id = copyUser.cart.findIndex((c) => c?.product?.id == product.id);

    if (Id === -1) {
      copyUser.cart.push({ product, quantity: 1 });
    } else {
      copyUser.cart[Id] = {
        product,
        quantity: copyUser.cart[Id].quantity + 1,
      };
    }
    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };

  return (
    <div className="w-[260px] sm:w-[280px] md:w-[320px] bg-slate-200 shadow-xl shadow-slate-500 rounded-lg overflow-hidden">
      <div className="w-full aspect-square ">
        <img
          className="w-full h-full object-cover"
          src={product?.image}
          alt={product?.title}
        />
      </div>
      <div className="details flex flex-col gap-y-1 text-black px-2 py-1">
        <h1 className="text-lg md:text-xl font-semibold line-clamp-1">
          {product?.title}
        </h1>
        <p className="text-sm">
          {product?.description?.slice(0, 80)}...
          <small className="text-blue-500">more</small>
        </p>
        <div className="flex items-center justify-between">
          <h3 className="text-md md:text-lg text-red-400">₹{product?.price}</h3>
          <button
            onClick={() => addToCartHandler(product)}
            className="w-fit px-2.5 mb-2 py-1.5 border-none rounded transition-all duration-200 bg-green-500 hover:bg-green-600 cursor-pointer text-white"
          >
            Add to cart
          </button>
        </div>
        <Link
          className="mx-auto text-sm text-blue-500"
          to={`/product/${product.id}`}
        >
          View More...
        </Link>
      </div>
    </div>
  );
};

export default ProductTemplate;
