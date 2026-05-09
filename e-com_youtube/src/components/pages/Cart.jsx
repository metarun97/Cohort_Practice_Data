import React from 'react';
import CartRow from './CartRow';
import { useSelector } from 'react-redux';

function Cart() {
  const { cart } = useSelector((state) => state.cartReducer);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-3 gap-6">
        {/* Left Side */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-5 shadow-md">
          <h1 className="text-2xl font-bold mb-6">Shopping Cart</h1>
          {cart.map((cartObj, idx) => {
            return <CartRow cartObject={cartObj} key={idx} />;
          })}
        </div>

        {/* Right Side */}
        <div className="bg-white rounded-2xl p-5 shadow-md h-fit">
          <h2 className="text-xl font-bold mb-5">Order Summary</h2>

          <div className="space-y-4">
            <div className="flex justify-between text-gray-600">
              <span>Subtotal</span>
              <span>$</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Shipping</span>
              <span>₹199</span>
            </div>

            <div className="flex justify-between text-gray-600">
              <span>Discount</span>
              <span className="text-green-600">-₹2,000</span>
            </div>

            <hr />

            <div className="flex justify-between text-xl font-bold">
              <span>Total</span>
              <span>₹41,196</span>
            </div>
          </div>

          {/* Coupon */}
          <div className="mt-6 flex gap-3">
            <input
              type="text"
              placeholder="Coupon code"
              className="flex-1 border rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-black"
            />

            <button className="bg-black text-white px-5 rounded-xl hover:bg-gray-800 transition">
              Apply
            </button>
          </div>

          {/* Checkout */}
          <button className="w-full mt-6 bg-black text-white py-4 rounded-xl text-lg font-medium hover:bg-gray-800 transition">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
}

export default Cart;
