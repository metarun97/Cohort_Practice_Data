import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Products = () => {
  const {
    productReducer: { products },
    userReducer: { users },
  } = useSelector((state) => state);

  const addToCartHandler = (id) => {
    const copyUser = { ...users, cart: [...users.cart] };
    // console.log(copyUser);
    const productId = copyUser.cart.findIndex((c) => c.id == id);
    // console.log(cartItem);
    if (productId === -1) {
      copyUser.cart.push({ productId: id, quantity: 1 });
    } else {
      copyUser.cart[productId].quantity += 1;
    }
    console.log(copyUser);
  };

  const renderProducts = products.map((product) => {
    return (
      <div
        className="max-w-[20%] h-auto bg-slate-200 shadow-xl shadow-slate-500 rounded-lg overflow-hidden"
        key={product.id}
      >
        <div className="w-full aspect-square ">
          <img
            className="w-full h-full object-cover"
            src={product.image}
            alt={product.title}
          />
        </div>
        <div className="details flex flex-col gap-y-1 text-black px-2 py-1">
          <h1 className="text-lg md:text-xl font-semibold line-clamp-1">
            {product.title}
          </h1>
          <p className="text-sm">
            {product.description.slice(0, 80)}...
            <small className="text-blue-500">more</small>
          </p>
          <div className="flex items-center justify-between">
            <h3 className="text-md md:text-lg text-red-400">
              ₹{product.price}
            </h3>
            <button
              onClick={() => addToCartHandler(product.id)}
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
  });

  return products.length > 0 ? (
    <div className="w-[95%] h-screen flex flex-wrap gap-5 items-start mx-auto">
      {renderProducts}
    </div>
  ) : (
    'Loading...'
  );
};

export default Products;
