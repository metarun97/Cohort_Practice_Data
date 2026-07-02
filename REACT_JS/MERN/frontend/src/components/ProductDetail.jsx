import { Link, useNavigate } from 'react-router-dom';
import SingleProduct from './../pages/SingleProduct';
import { useEffect, useState } from 'react';
import { IoMdArrowBack } from 'react-icons/io';
import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaShoppingCart,
  FaHeart,
  FaShareAlt,
  FaTruck,
  FaShieldAlt,
  FaRedo,
  FaMinus,
  FaPlus,
} from 'react-icons/fa';

const ProductDetail = ({ singleProduct }) => {
  const {
    title,
    description,
    category,
    imageUrl,
    price,
    brand,
    isStock,
    stock,
    reviews,
    rating,
  } = singleProduct;

  const navigate = useNavigate();

  const [quantity, setQuantity] = useState(1);

  /* Add to cart function */
  const addToCart = async (productId, quantity) => {
    try {
      const res = await fetch('http://localhost:3000/api/cart/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          productId,
          quantity,
        }),
      });
      const result = await res.json();
      // console.log(result);
    } catch (error) {
      console.log(error);
    }
  };
  /*  Increase quantity function */
  const increaseQtyHandler = () => {
    if (singleProduct.stock > quantity) {
      setQuantity((prev) => prev + 1);
    }
  };

  /* Decrease quantity function */
  const decreaseQtyHandler = () => {
    if (quantity >= 2) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Breadcrumb */}
        <p className="text-sm text-gray-500 mb-6 flex items-center">
          <span
            className="bg-black text-white p-1.5 rounded-full cursor-pointer"
            onClick={() => navigate(-1)}
          >
            <IoMdArrowBack />
          </span>
          <span className="mx-1">/</span> {brand}
          <span className="mx-1"></span>
          <span className="text-gray-800 font-medium">{title}</span>
        </p>

        <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
          {/* Left: Image */}
          <div className="flex-1 w-full">
            <div className="relative bg-gray-50 rounded-2xl overflow-hidden">
              <img
                src={imageUrl}
                alt="Cricket Bat Professional Grade"
                className="w-full h-[320px] sm:h-[420px] lg:h-[480px] object-cover"
              />
              <span className="absolute top-4 left-4 bg-white/90 text-xs font-medium text-gray-700 px-3 py-1 rounded-full">
                {category}
              </span>
            </div>
          </div>

          {/* Right: Details */}
          <div className="flex-1 w-full">
            <p className="text-sm font-medium text-blue-600 uppercase tracking-wide mb-2">
              {brand}
            </p>

            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug mb-3">
              {title}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-0.5">
                <FaStar className="w-4 h-4 text-yellow-400" />
                <FaStar className="w-4 h-4 text-yellow-400" />
                <FaStar className="w-4 h-4 text-yellow-400" />
                <FaStar className="w-4 h-4 text-yellow-400" />
                <FaStarHalfAlt className="w-4 h-4 text-yellow-400" />
              </div>
              <span className="text-sm font-medium text-gray-700">
                {rating}
              </span>
              <span className="text-sm text-gray-400">{reviews} reviews</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-5">
              <p className="text-3xl sm:text-4xl font-bold text-gray-900">
                ${price}
              </p>
              <span className="text-sm text-gray-500">incl. taxes</span>
            </div>

            <p className="text-gray-600 text-sm sm:text-base leading-relaxed mb-6">
              {description}
            </p>

            {/* Stock info */}
            <p className="text-sm text-gray-600 mb-6">
              Availability :
              <span className="text-green-600 font-medium ml-2">
                {stock > 0 ? `${stock} units in stock` : 'Out of Stock'}
              </span>
            </p>

            {/* Quantity Selector */}
            <div className="flex items-center gap-4 mb-6">
              <span className="text-sm font-medium text-gray-700">
                Quantity
              </span>
              <div className="flex items-center border border-gray-200 rounded-full">
                <button
                  onClick={decreaseQtyHandler}
                  className="p-2.5 sm:p-3 text-gray-600 hover:text-blue-600 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  <FaMinus className="w-3 h-3" />
                </button>
                <span className="w-10 text-center text-sm font-medium text-gray-900">
                  {quantity}
                </span>
                <button
                  onClick={increaseQtyHandler}
                  className="p-2.5 sm:p-3 text-gray-600 hover:text-blue-600 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors cursor-pointer"
                >
                  <FaPlus className="w-3 h-3" />
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center gap-3 mb-8">
              <button
                onClick={() => addToCart(singleProduct._id, quantity)}
                disabled={stock <= 0}
                className={`flex-1 flex items-center justify-center gap-2 font-medium text-sm sm:text-base py-3 rounded-full transition-colors ${
                  stock > 0
                    ? 'bg-blue-600 text-white hover:bg-blue-700'
                    : 'bg-gray-200 text-gray-400 cursor-not-allowed'
                }`}
              >
                <FaShoppingCart className="w-4 h-4" />
                Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
