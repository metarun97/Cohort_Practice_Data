import React from 'react';
import { FaPlus, FaMinus, FaTrash } from 'react-icons/fa';
import { useDispatch } from 'react-redux';
import Swal from 'sweetalert2';
import 'sweetalert2/src/sweetalert2.scss';
import { changeQuantity, removeFromCart } from '../../redux/cartSlice';

const CartRow = ({ cartObject }) => {
  // console.log(cartObject);
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

  const dispatch = useDispatch();

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

  //* Change Quantity:-
  const changeQty = (type) => {
    let finalQty = qty;
    if (type == '+') {
      finalQty = qty + 1;
    } else {
      if (qty > 1) {
        finalQty = qty - 1;
      }
    }
    dispatch(changeQuantity({ id, finalQty }));
  };

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

            <button
              className="text-red-500 flex justify-center hover:scale-110 transition"
              onClick={handleRemoveFromCart}
            >
              <FaTrash />
            </button>
            <div>
              <p className="text-sm text-gray-500 text-center">Total</p>

              <h3 className="text-xl font-bold text-black">${Math.floor(qty * price)}</h3>
            </div>
          </div>

          {/* Price */}
          <div className="mt-4 flex items-center gap-3">
            <span className="text-2xl font-bold">${Math.floor(price)}</span>

            <span className="line-through text-gray-400">
              ${discountPercentage}
            </span>
          </div>

          {/* Quantity */}
          <div className="mt-5 flex items-center gap-4">
            <div className="flex items-center border rounded-lg overflow-hidden">
              <button
                className="px-4 py-2 hover:bg-gray-100 text-md font-bold"
                onClick={() => changeQty('-')}
              >
                -
              </button>

              <span className="px-5 py-2 font-medium">{qty}</span>

              <button
                className="px-4 py-2 hover:bg-gray-100 text-md font-bold"
                onClick={() => changeQty('+')}
              >
                +
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
