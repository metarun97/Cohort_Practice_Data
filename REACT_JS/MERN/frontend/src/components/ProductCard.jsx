import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaShoppingCart,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';

const ProductCard = ({ product }) => {
  const {
    title,
    description,
    category,
    price,
    stock,
    isStock,
    reviews,
    rating,
    brand,
    imageUrl,
  } = product;

  // console.log(product)

  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 >= 0.5;

    for (let i = 0; i < fullStars; i++) {
      stars.push(
        <FaStar key={`full-${i}`} className="w-3.5 h-3.5 text-yellow-400" />,
      );
    }
    if (hasHalfStar) {
      stars.push(
        <FaStarHalfAlt key="half" className="w-3.5 h-3.5 text-yellow-400" />,
      );
    }
    const remaining = 5 - stars.length;
    for (let i = 0; i < remaining; i++) {
      stars.push(
        <FaRegStar
          key={`empty-${i}`}
          className="w-3.5 h-3.5 text-yellow-400"
        />,
      );
    }
    return stars;
  };

  return (
    <Link
      to={`/products/${product._id}`}
      className="w-full max-w-sm bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
    >
      <div
        key={product.id}
        className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden"
      >
        <div className="bg-gray-50">
          <img
            src={product.imageUrl}
            alt={product.title}
            className="w-full h-44 sm:h-48 object-cover"
          />
        </div>
        <div className="p-4">
          <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
            {product.category}
          </p>
          <h3 className="text-sm sm:text-base font-semibold text-gray-900 mb-2 line-clamp-2">
            {product.title}
          </h3>
          <div className="flex items-center gap-1 mb-2">
            <FaStar className="w-3 h-3 text-yellow-400" />
            <span className="text-xs font-medium text-gray-700">
              {product.rating}
            </span>
            <span className="text-xs text-gray-400">({product.reviews})</span>
          </div>
          <p className="text-lg font-bold text-gray-900">
            ${product.price.toFixed(2)}
          </p>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;
