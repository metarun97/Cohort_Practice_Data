import React from 'react';

const CategoryCard = ({ category }) => {
  const { categoryName, slug, description, categoryImage, productCount } =
    category;

  return (
    <div className="bg-white border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200 w-full max-w-[280px]">
      <img
        src={categoryImage}
        alt={categoryName}
        className="w-full h-36 object-cover"
      />

      <div className="p-4">
        <h3 className="text-base font-medium text-gray-900 mb-1">
          {categoryName}
        </h3>

        <p className="text-sm text-gray-500 mb-2 line-clamp-2">{description}</p>

        <span className="text-xs text-gray-400 mb-3 block">
          {productCount} products
        </span>

        <button
          onClick={() => console.log(`Navigate to /category/${slug}`)}
          className="w-full text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 rounded-lg py-2 transition-colors duration-150 cursor-pointer"
        >
          View products
        </button>
      </div>
    </div>
  );
};

export default CategoryCard;
