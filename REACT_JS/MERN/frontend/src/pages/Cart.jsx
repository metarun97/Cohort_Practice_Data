import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  FaMinus,
  FaPlus,
  FaTrashAlt,
  FaArrowLeft,
  FaTag,
  FaShoppingBag,
} from 'react-icons/fa';

const Cart = () => {
  const [cart, setCart] = useState([]);
  const [promoCode, setPromoCode] = useState('');
  const [total, setTotal] = useState(null);

  // console.log(cart.items);

  useEffect(() => {
    fetchCartData();
  }, []);

  const fetchCartData = async () => {
    try {
      const res = await fetch('http://localhost:3000/api/cart');
      const result = await res.json();
      if (!res.ok) {
        throw new Error(result.message);
      }
      // console.log(result.cart.items);
      setCart(result.cart.items);
      setTotal(result.totalPrice);
    } catch (error) {
      console.error('Fail to fetch cart:', error);
    }
  };

  if (cart.length === 0) {
    return (
      <div className="bg-white min-h-screen flex items-center justify-center">
        <div className="text-center px-4">
          <FaShoppingBag className="w-14 h-14 text-gray-300 mx-auto mb-4" />
          <h2 className="text-xl font-semibold text-gray-900 mb-2">
            Your cart is empty
          </h2>
          <p className="text-sm text-gray-500 mb-6">
            Looks like you haven't added anything yet.
          </p>
          <Link
            to="/products"
            className="inline-block bg-blue-600 text-white text-sm font-medium px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 sm:py-12">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              Shopping Cart
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {cart?.length} item{cart?.length > 1 ? 's' : ''} in your cart
            </p>
          </div>
          <Link
            to="/products"
            className="hidden sm:flex items-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 transition-colors"
          >
            <FaArrowLeft className="w-3.5 h-3.5" />
            Continue Shopping
          </Link>
        </div>

        <div className="flex flex-col lg:flex-row gap-8 lg:gap-12">
          {/* Cart Items */}
          <div className="flex-1 space-y-4">
            {cart?.map((item) => (
              <div
                key={item._id}
                className="flex flex-col sm:flex-row gap-4 border border-gray-100 rounded-2xl p-4 hover:shadow-sm transition-shadow"
              >
                {/* Image */}
                <div className="w-full sm:w-28 h-28 shrink-0 bg-gray-50 rounded-xl overflow-hidden">
                  <img
                    src={item.productId.imageUrl}
                    alt={item.productId.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Details */}
                <div className="flex-1 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                  <div>
                    <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
                      {item.productId.brand}
                    </p>
                    <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-1">
                      {item.productId.title}
                    </h3>
                    <p className="text-sm text-gray-500">
                      ${item.productId.price} each
                    </p>
                  </div>

                  <div className="flex items-center justify-between sm:flex-col sm:items-end gap-3">
                    {/* Quantity */}
                    <div className="flex items-center border border-gray-200 rounded-full">
                      <button className="p-2 text-gray-600 hover:text-blue-600 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors">
                        <FaMinus className="w-2.5 h-2.5" />
                      </button>
                      <span className="w-8 text-center text-sm font-medium text-gray-900">
                        {item.quantity}
                      </span>
                      <button className="p-2 text-gray-600 hover:text-blue-600 disabled:text-gray-300 disabled:cursor-not-allowed transition-colors">
                        <FaPlus className="w-2.5 h-2.5" />
                      </button>
                    </div>

                    {/* Price + Remove */}
                    <div className="flex items-center gap-3">
                      <p className="text-base font-bold text-gray-900">
                        ${(item.productId.price * item.quantity).toFixed(2)}
                      </p>
                      <button className="text-gray-400 hover:text-red-500 transition-colors">
                        <FaTrashAlt className="w-4 h-4" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Order Summary */}
          <div className="w-full lg:w-80 shrink-0">
            <div className="bg-gray-50 rounded-2xl p-6 sticky top-6">
              <h2 className="text-lg font-semibold text-gray-900 mb-5">
                Order Summary
              </h2>

              {/* Promo Code */}
              <div className="flex items-center bg-white border border-gray-200 rounded-full pl-4 pr-1.5 py-1.5 mb-5">
                <FaTag className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                <input
                  type="text"
                  value={promoCode}
                  onChange={(e) => setPromoCode(e.target.value)}
                  placeholder="Promo code"
                  className="bg-transparent outline-none px-3 text-sm w-full text-gray-700 placeholder-gray-400"
                />
                <button className="bg-gray-900 hover:bg-black text-white text-xs font-medium px-4 py-1.5 rounded-full shrink-0 transition-colors">
                  Apply
                </button>
              </div>

              {/* Price Breakdown */}
              <div className="space-y-3 text-sm">
                <div className="flex items-center justify-between text-gray-600">
                  <span>Subtotal</span>
                  <span className="font-medium text-gray-900">${total}</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>Shipping</span>
                  <span className="font-medium text-gray-900">$149</span>
                </div>
                <div className="flex items-center justify-between text-gray-600">
                  <span>Tax (5%)</span>
                  <span className="font-medium text-gray-900">10</span>
                </div>
              </div>

              <div className="border-t border-gray-200 my-4" />

              <div className="flex items-center justify-between mb-6">
                <span className="text-base font-semibold text-gray-900">
                  Total
                </span>
                <span className="text-xl font-bold text-gray-900">${total + 149}</span>
              </div>

              <button className="w-full bg-blue-600 text-white font-medium text-sm py-3 rounded-full hover:bg-blue-700 transition-colors">
                Proceed to Checkout
              </button>

              <Link
                to="/products"
                className="flex sm:hidden items-center justify-center gap-2 text-sm font-medium text-gray-600 hover:text-blue-600 mt-4 transition-colors"
              >
                <FaArrowLeft className="w-3.5 h-3.5" />
                Continue Shopping
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
