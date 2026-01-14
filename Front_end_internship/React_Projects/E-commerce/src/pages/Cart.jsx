import { useContext } from 'react';
import { cartContext } from '../context/CarContext';

const Cart = () => {
  const { cart, removeFromCart } = useContext(cartContext);

  return (
    <div className="max-w-6xl h-auto mx-auto p-6 mt-15">
      <h1 className="text-2xl font-semibold mb-6">Your Cart</h1>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 space-y-4">
          {cart.map((item) => {
            return (
              <div
                key={item.id}
                className="flex items-center gap-4 p-4 border rounded-lg"
              >
                <img
                  src={item.image}
                  className="w-24 h-24 object-cover rounded"
                />
                <div className="flex-1">
                  <h2 className="font-medium">{item.name}</h2>
                  <p className="text-gray-500 text-sm">{item.category}</p>
                  <p className="mt-1 font-semibold">{item.price}</p>
                </div>
                <div className="flex flex-col items-center gap-2">
                  <span className="text-sm">Quantity: {item.quantity}</span>
                  <button
                    className="bg-red-500 text-sm px-3 py-1 text-white rounded-md cursor-pointer"
                    onClick={() => removeFromCart(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="border rounded-lg p-4 h-fit">
          <h2 className="text-lg font-semibold mb-4">Order Summary</h2>

          <div className="flex justify-between text-sm mb-2">
            <span>Subtotal</span>
            <span>₹5298</span>
          </div>

          <div className="flex justify-between text-sm mb-2">
            <span>Shipping</span>
            <span>₹99</span>
          </div>

          <div className="flex justify-between font-semibold border-t pt-3">
            <span>Total</span>
            <span>₹5397</span>
          </div>

          <button className="w-full mt-4 bg-black text-white py-2 rounded hover:opacity-90">
            Proceed to Checkout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cart;
