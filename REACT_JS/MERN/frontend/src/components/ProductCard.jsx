import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar,
  FaShoppingCart,
} from 'react-icons/fa';

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
    <div className="w-full max-w-sm bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300 overflow-hidden">
      {/* Image */}
      <div className="relative bg-gray-50">
        <img
          src={imageUrl}
          alt={title}
          className="w-full h-48 sm:h-56 object-cover"
        />
        <span className="absolute top-3 left-3 bg-white/90 text-xs font-medium text-gray-700 px-2.5 py-1 rounded-full">
          {category}
        </span>
        <span
          className={`absolute top-3 right-3 text-xs font-semibold px-2.5 py-1 rounded-full ${
            !isStock ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
          }`}
        >
          {!isStock ? 'In Stock' : 'Out of Stock'}
        </span>
      </div>

      {/* Content */}
      <div className="p-4 sm:p-5">
        <p className="text-xs font-medium text-blue-600 uppercase tracking-wide mb-1">
          {brand}
        </p>

        <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug mb-1.5">
          {title}
        </h3>

        <p className="text-sm text-gray-500 leading-relaxed mb-3 line-clamp-2">
          {description}
        </p>

        {/* Rating */}
        <div className="flex items-center gap-2 mb-3">
          <div className="flex items-center gap-0.5">{renderStars()}</div>
          <span className="text-sm text-gray-700 font-medium">{rating}</span>
          <span className="text-xs text-gray-400">({reviews} reviews)</span>
        </div>

        {/* Price + Stock count */}
        <div className="flex items-center justify-between mb-4">
          <p className="text-xl sm:text-2xl font-bold text-gray-900">
            ${price.toFixed(2)}
          </p>
          <p className="text-xs text-gray-500">{stock} left in stock</p>
        </div>

        {/* Add to Cart Button */}
        <button
          disabled={isStock}
          className={`w-full flex items-center justify-center gap-2 font-medium text-sm py-2.5 rounded-full transition-colors ${
            isStock
              ? 'bg-gray-200 text-gray-400 cursor-not-allowed '
              : 'bg-blue-600 text-white hover:bg-blue-700 cursor-pointer'
          }`}
        >
          <FaShoppingCart className="w-4 h-4" />
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
