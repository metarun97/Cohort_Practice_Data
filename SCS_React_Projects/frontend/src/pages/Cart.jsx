import { useDispatch, useSelector } from 'react-redux';
import { asyncUpdateUser } from '../store/actions/userActions';

const Cart = () => {
  const dispatch = useDispatch();

  const {
    productReducer: { products },
    userReducer: { users },
  } = useSelector((state) => state);

  const increaseQuantityHandler = (index, product) => {
    const copyUser = { ...users, cart: [...users.cart] };

    copyUser.cart[index] = {
      ...copyUser.cart[index],
      quantity: copyUser.cart[index].quantity + 1,
    };
    console.log(copyUser);
    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };

  const decreaseQuantityHandler = (index, product) => {
    const copyUser = { ...users, cart: [...users.cart] };

    if (users.cart[index].quantity > 1) {
      copyUser.cart[index] = {
        ...copyUser.cart[index],
        quantity: copyUser.cart[index].quantity - 1
      };
      console.log(copyUser);
    } else {
      copyUser.cart.splice(index, 1);
    }
    dispatch(asyncUpdateUser(copyUser.id, copyUser));
  };

  const cartItems = users.cart.map((c, index) => {
    return (
      <li
        id={c?.product?.id}
        className="max-w-5xl flex items-center gap-x-10  mx-auto list-none  bg-gray-600 rounded-xl  p-5"
      >
        <div className="w-62 aspect-square">
          <img
            className="w-full h-full object-cover"
            src={c?.product?.image}
            alt={c?.product?.title}
          />
        </div>
        <div className="max-w-xl flex flex-col gap-2">
          <h1 className="text-3xl font-medium">{c.product.title}</h1>
          <h2 className="text-2xl text-red-500 font-thin">
            ₹{c?.product?.price}
          </h2>
          <h3 className="text-2xl text-green-500 font-thin">
            {c?.product?.category}
          </h3>
          <p className="text-xl text-slate-400 font-thin">
            {c?.product?.description}
          </p>
          <p className="flex items-center gap-x-4">
            <span
              onClick={() => decreaseQuantityHandler(index, c)}
              className=" flex justify-center items-center w-6 h-6 transition-all duration-200 bg-blue-400 hover:bg-blue-600 text-white rounded cursor-pointer"
            >
              -
            </span>
            {c?.quantity}
            <span
              onClick={() => increaseQuantityHandler(index, c)}
              className=" flex justify-center items-center w-6 h-6 transition-all duration-200 bg-blue-400 hover:bg-blue-600 text-white rounded cursor-pointer"
            >
              +
            </span>
          </p>
        </div>
      </li>
    );
  });

  return <div>{cartItems}</div>;
};

export default Cart;
