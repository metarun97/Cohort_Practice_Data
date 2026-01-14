import { Link, useNavigate, useParams } from 'react-router-dom';
import { IoMdArrowRoundBack } from 'react-icons/io';

const CatagoryPage = ({ allProducts }) => {
  const { categoryName } = useParams();

  const filterProduct = allProducts.filter((p) => p.category === categoryName);

  const navigate = useNavigate();

  return (
    <>
      <div className="flex items-center justify-center gap-1 md:gap-3 lg:gap-5 mt-20">
        <button
          className="w-fit flex items-center gap-1 bg-yellow-500 text-white px-2 py-1 lg:px-6 lg:py-2.5  rounded-lg transition duration-100 hover:bg-yellow-600 cursor-pointer font-bold"
          onClick={() => navigate('/')}
        >
          <IoMdArrowRoundBack /> to Home
        </button>
        <h1 className="text-xl md:text-3xl lg:text-6xl capitalize text-blue-950 text-center font-semibold underline">
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
            <div className="my-6 ">
              <h2 className="text-lg font-semibold mt-1">{product.name}</h2>
              <p className="text-xl font-bold mt-2 text-blue-500">
                ₹{product.price}
              </p>
              <p className="text-sm text-gray-500 capitalize">
                {product.description}
              </p>
            </div>
            <Link
              className="w-fit bg-green-500 text-white px-8 py-3 rounded-lg transition duration-100 hover:bg-green-600 cursor-pointer"
              to={`/product/${product.id}`}
            >
              View more...
            </Link>
          </div>
        ))}
      </div>
    </>
  );
};

export default CatagoryPage;
