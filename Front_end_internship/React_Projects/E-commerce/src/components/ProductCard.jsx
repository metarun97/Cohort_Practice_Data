import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const { id, name, price, description, image } = product;

// console.log(product);
  return (
    <div
      className="w-full bg-white shadow hover:shadow-xl p-4 transition duration-150 rounded-xl cursor-pointer"
    >
      <div key={id} className="w-full h-48 flex items-center justify-center">
        <img src={image} alt={name} className="h-full object-contain" />
      </div>
      <div className="my-4">
        <h2 className="text-lg font-semibold mt-1">{name}</h2>
        <p className="text-xl font-bold mt-2 text-blue-500">₹{price}</p>
        <p className="text-sm text-gray-500 capitalize">{description}</p>
      </div>
      <Link
        className="mt-4 w-full bg-green-500 text-white lg:px-5 lg:py-2.5 px-3 py-1.5 rounded-lg transition duration-100 hover:bg-green-600 cursor-pointer"
        to={`/product/${product.id}`}
      >
        View More...
      </Link>
    </div>
  );
};

export default ProductCard;
