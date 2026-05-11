import React from 'react';
import { FaStar, FaRegHeart, FaShoppingCart } from 'react-icons/fa';
import { MdRemoveShoppingCart } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../../redux/cartSlice';
import { toast } from 'react-toastify';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';

function ProductCard({ data }) {
  const {
    id,
    title,
    description,
    thumbnail,
    price,
    stock,
    category,
    discountPercentage,
    quantity,
  } = data;

  const { cart } = useSelector((state) => state.cartReducer);

  const alreadyExistsInCart = cart.find((item) => item.id === id);

  const dispatch = useDispatch();

  //* Add to cart:-
  const handleAddToCart = () => {
    const cartObj = {
      id,
      thumbnail,
      title,
      price,
      stock,
      category,
      discountPercentage,
      quantity: 1,
    };

    // console.log(cartObj);
    dispatch(addToCart({ cartObj }));
    toast.success('Item added successfully✅', { autoClose: 900 });
  };

  //* Remove from cart:-
  const handleRemoveFromCart = () => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!',
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(removeFromCart({ id }));
        Swal.fire({
          title: 'Deleted!',
          text: 'Your file has been deleted.',
          icon: 'success',
        });
      }
    });
  };

  return (
    <div className="w-[320px] bg-white rounded-2xl shadow-md overflow-hidden group hover:shadow-2xl transition-all duration-300">
      {/* Image */}
      <div className="relative overflow-hidden">
        <img
          src={thumbnail}
          alt="Product"
          className="w-full h-72 object-cover group-hover:scale-105 transition-transform duration-300"
        />

        {/* Badge */}
        <span className="absolute top-3 left-3 bg-black text-white text-xs px-3 py-1 rounded-full">
          New
        </span>

        {/* Wishlist */}
        <button className="absolute top-3 right-3 bg-white p-2 rounded-full shadow hover:scale-110 transition">
          <FaRegHeart size={18} />
        </button>
      </div>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        <p className="text-sm text-gray-500 mb-1">{category}</p>

        {/* Title */}
        <h2 className="text-lg font-semibold text-gray-800 line-clamp-1">
          {title}
        </h2>

        {/* Rating */}
        <div className="flex items-center gap-1 mt-2">
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-yellow-400" />
          <FaStar className="text-gray-300" />

          <span className="text-sm text-gray-500 ml-1">(4.0)</span>
        </div>

        {/* Price */}
        <div className="flex items-center gap-3 mt-4">
          <span className="text-2xl font-bold text-gray-900">${price}</span>

          <span className="text-sm text-green-600 font-medium">
            {discountPercentage}% OFF
          </span>
        </div>

        {/* Button */}
        {alreadyExistsInCart ? (
          <button
            onClick={handleRemoveFromCart}
            className="w-full mt-5 flex items-center justify-center gap-2 bg-red-500 text-white py-3 rounded-xl hover:bg-red-600 transition"
          >
            <MdRemoveShoppingCart />
            Remove from Cart
          </button>
        ) : (
          <button
            onClick={handleAddToCart}
            className="w-full mt-5 flex items-center justify-center gap-2 bg-green-500 text-white py-3 rounded-xl hover:bg-green-600 transition"
          >
            <FaShoppingCart />
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
}

export default ProductCard;
