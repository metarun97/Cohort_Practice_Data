import { useContext } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { cartContext } from '../context/CarContext';

const ProductDetails = ({ allProducts }) => {
  const { id } = useParams();

  const singleProduct = allProducts.find((p) => p.id === Number(id));

  const navigate = useNavigate();

  const { addToCart } = useContext(cartContext);
  // console.groupEnd(product);

  const addCartFunc = () => {
    addToCart(singleProduct);
    navigate('/cart');
  };

  return (
    <div className="max-w-7xl h-auto mx-auto px-4 py-30 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={singleProduct.image}
            alt={singleProduct.name}
            className="w-full max-w-md object-contain rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
            {singleProduct.name}
          </h1>

          <p className="text-gray-600 mb-4 text-l md:text-xl lg:text-2xl">
            {singleProduct.description}
          </p>

          <p className="text-xl font-semibold text-slate-400 mb-6">
            {singleProduct.specifications}
          </p>
          <p className="text-2xl font-semibold text-green-600 mb-6">
            ₹{singleProduct.price}
          </p>

          <div className="flex gap-2 items-center">
            <button
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md cursor-pointer"
              onClick={addCartFunc}
            >
              Add to Cart
            </button>
            <button
              onClick={() => navigate('/products')}
              className="bg-yellow-400 hover:bg-yellow-500 text-white px-6 py-3 rounded-md cursor-pointer"
            >
              Back to Products
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
