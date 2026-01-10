import { useNavigate, useParams } from 'react-router-dom';

const ProductDetails = ({ allProducts }) => {
  const { id } = useParams();

  const singleProductDets = allProducts.find((p) => p.id === Number(id));
  console.log(singleProductDets);

  const navigate = useNavigate();

  // console.log(allProducts);
  return (
    <div className="max-w-7xl h-auto mx-auto px-4 py-30 mt-20">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Image Section */}
        <div className="flex justify-center">
          <img
            src={singleProductDets.image}
            alt={singleProductDets.name}
            className="w-full max-w-md object-contain rounded-lg"
          />
        </div>

        {/* Details Section */}
        <div>
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold mb-4">
            {singleProductDets.name}
          </h1>

          <p className="text-gray-600 mb-4 text-l md:text-xl lg:text-2xl">
            {singleProductDets.description}
          </p>

          <p className="text-xl font-semibold text-slate-400 mb-6">
            {singleProductDets.specifications}
          </p>
          <p className="text-2xl font-semibold text-green-600 mb-6">
            ₹{singleProductDets.price}
          </p>

          <div className="flex gap-2 items-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md cursor-pointer">
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
