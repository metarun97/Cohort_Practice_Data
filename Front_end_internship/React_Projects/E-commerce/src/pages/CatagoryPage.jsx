import { useNavigate, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';
const CatagoryPage = ({ allProducts }) => {
  const { categoryName } = useParams();

  const filterProduct = allProducts.filter((p) => p.category === categoryName);

  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-center gap-4 mt-20">
        <button
          className="w-fit flex items-center gap-1 bg-yellow-500 text-white px-4 py-2  rounded-lg transition duration-100 hover:bg-yellow-600 cursor-pointer font-bold"
          onClick={() => navigate('/')}
        >
          <IoMdArrowRoundBack /> to Home
        </button>
        <h1 className="text-5xl capitalize text-blue-950 text-center font-semibold underline">
          {categoryName} Section
        </h1>
      </div>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-2 lg:mt-15 gap-5 py-20 px-2 md:p-4 lg:px-6 my-2">
        {filterProduct.map((product) => (
          <div
            key={product.id}
            className="w-full bg-white shadow hover:shadow-xl p-4 transition duration-150 rounded-xl cursor-pointer"
          >
            <div
              key={product.id}
              className="w-full h-48 flex items-center justify-center"
            >
              <img
                src={product.image}
                alt={product.name}
                className="h-full object-contain"
              />
            </div>
            <div className="mt-4">
              <h2 className="text-lg font-semibold mt-1">{product.name}</h2>
              <p className="text-xl font-bold mt-2 text-blue-500">
                ₹{product.price}
              </p>
              <p className="text-sm text-gray-500 capitalize">
                {product.description}
              </p>
            </div>
            <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg transition duration-100 hover:bg-blue-600 cursor-pointer">
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default CatagoryPage;
