import React from 'react';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';

const CartRow = ({ cartObject }) => {
  console.log(cartObject);
  const {
    id,
    thumbnail,
    title,
    price,
    stock,
    qty,
    category,
    discountPercentage,
  } = cartObject;
  return (
    <div>
      {/* Cart Item */}
      <div className="flex flex-col md:flex-row items-center gap-5 border-b pb-6 mb-6">
        {/* Image */}
        <img
          src={thumbnail}
          alt={title}
          className="w-36 h-36 object-cover rounded-xl"
        />

        {/* Content */}
        <div className="flex-1 w-full">
          <div className="flex justify-between">
            <div>
              <h2 className="text-xl font-semibold">{title}</h2>

              <p className="text-gray-500 text-sm mt-1">{category}</p>
            </div>

            <button className="text-red-500 hover:scale-110 transition">
              <FaTrash />
            </button>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-bold">${price}</span>

            <span className="line-through text-gray-400">
              ${discountPercentage}
            </span>
          </div>

          {/* Quantity */}
          <div className="mt-5 flex items-center gap-4">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button className="px-4 py-2 hover:bg-gray-100">
                <FaMinus size={12} />
              </button>

              <span className="px-5 py-2 font-medium">{qty}</span>

              <button className="px-4 py-2 hover:bg-gray-100">
                <FaPlus size={12} />
              </button>
            </div>

            <p className="text-sm text-green-600 font-medium">
              {stock > 0 ? 'In Stock' : 'Out of Stock'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartRow;
