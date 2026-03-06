import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { asyncUpdateUser } from './../store/actions/userActions';
import { useEffect, useState } from 'react';
import axios from '../api/axiosconfig';
import InfiniteScroll from 'react-infinite-scroll-component';

const Products = () => {
  const dispatch = useDispatch();

  const { users } = useSelector((state) => state.userReducer);
  // const { products } = useSelector((state) => state.productReducer);
  const [products, setProducts] = useState([]);
  const [hasMore, sethasMore] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `/products?_limit=6&_start=${products.length}`,
      );
      // console.log(res);
      if (data.length != 0) {
        sethasMore(true);
        setProducts(data);
      } else {
        sethasMore(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

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

  const renderProducts = products?.map((product) => {
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
  });

  return products?.length > 0 ? (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchProducts}
      loader={<h4>Loading...</h4>}
      hasMore={hasMore}
      endMessage={
        <p style={{ textAlign: 'center' }}>
          <b>Yey! You have seen it all </b>
        </p>
      }
    >
      <div className="min-w-5xl h-full py-5 bg-slate-700 justify-center flex flex-wrap gap-x-10 gap-y-5">
        {renderProducts}
      </div>
    </InfiniteScroll>
  ) : (
    'Loading...'
  );
};

export default Products;
