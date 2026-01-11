import { Link } from 'react-router-dom';

const ProductCard = ({ allProducts, product }) => {
  const { id, name, price, description, image } = product;

  return (
    <Link
      to={`/product/${product.id}`}
      className="w-full bg-white shadow hover:shadow-xl p-4 transition duration-150 rounded-xl cursor-pointer"
    >
      <div key={id} className="w-full h-48 flex items-center justify-center">
        <img src={image} alt={name} className="h-full object-contain" />
      </div>
      <div className="mt-4">
        <h2 className="text-lg font-semibold mt-1">{name}</h2>
        <p className="text-xl font-bold mt-2 text-blue-500">₹{price}</p>
        <p className="text-sm text-gray-500 capitalize">{description}</p>
      </div>
      <button className="mt-4 w-full bg-blue-500 text-white py-2 rounded-lg transition duration-100 hover:bg-blue-600 cursor-pointer">
        Add to Cart
      </button>
    </Link>
  );
};

export default ProductCard;
