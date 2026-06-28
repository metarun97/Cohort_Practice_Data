import React, { useEffect, useState } from 'react';
import {
  FaFilter,
  FaChevronDown,
  FaStar,
  FaTimes,
  FaTh,
  FaList,
} from 'react-icons/fa';
import ProductCard from '../components/ProductCard';

const categories = [
  'Sports & Fitness',
  'Electronics',
  'Fashion',
  'Home & Kitchen',
  'Books',
  'Toys & Games',
];

const sortOptions = [
  'Most Popular',
  'Newest First',
  'Price: Low to High',
  'Price: High to Low',
  'Top Rated',
];

const products = [
  {
    id: 1,
    title: 'Cricket Bat Professional Grade',
    category: 'Sports & Fitness',
    price: 89.99,
    rating: 4.6,
    reviews: 67,
    imageUrl:
      'https://images.unsplash.com/photo-1624880357913-a8539238245b?w=400',
  },
  {
    id: 2,
    title: 'Wireless Bluetooth Headphones',
    category: 'Electronics',
    price: 59.99,
    rating: 4.3,
    reviews: 142,
    imageUrl:
      'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
  },
  {
    id: 3,
    title: 'Running Shoes Lightweight',
    category: 'Fashion',
    price: 74.5,
    rating: 4.7,
    reviews: 98,
    imageUrl: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400',
  },
  {
    id: 4,
    title: 'Non-Stick Cookware Set',
    category: 'Home & Kitchen',
    price: 120.0,
    rating: 4.5,
    reviews: 54,
    imageUrl:
      'https://images.unsplash.com/photo-1584990347449-a8b0f8d23a3b?w=400',
  },
  {
    id: 5,
    title: 'Yoga Mat Premium',
    category: 'Sports & Fitness',
    price: 29.99,
    rating: 4.4,
    reviews: 76,
    imageUrl:
      'https://images.unsplash.com/photo-1601925260368-ae2f83cf8b7f?w=400',
  },
  {
    id: 6,
    title: 'Smart Watch Series 5',
    category: 'Electronics',
    price: 199.99,
    rating: 4.8,
    reviews: 210,
    imageUrl:
      'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400',
  },
];

const Products = () => {
  const [products, setProducts] = useState([]);

  const [sortOpen, setSortOpen] = useState(false);
  const [selectedSort, setSelectedSort] = useState('Most Popular');
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [priceRange, setPriceRange] = useState(250);
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('http://localhost:3000/api/products');
      const result = await res.json();
      // console.log(result.data);
      setProducts(result.data);
    };

    fetchProducts();
  }, []);

  const toggleCategory = (cat) => {
    setSelectedCategories((prev) =>
      prev.includes(cat) ? prev.filter((c) => c !== cat) : [...prev, cat],
    );
  };

  const clearFilters = () => {
    setSelectedCategories([]);
    setPriceRange(250);
  };

  const FilterSidebar = () => (
    <div className="w-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h3 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
          <FaFilter className="w-4 h-4 text-blue-600" />
          Filters
        </h3>
        {(selectedCategories.length > 0 || priceRange < 250) && (
          <button
            onClick={clearFilters}
            className="text-xs text-blue-600 hover:underline font-medium"
          >
            Clear all
          </button>
        )}
      </div>

      {/* Category Filter */}
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-gray-800 mb-3">Category</h4>
        <div className="space-y-2.5">
          {categories.map((cat) => (
            <label
              key={cat}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <input
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() => toggleCategory(cat)}
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                {cat}
              </span>
            </label>
          ))}
        </div>
      </div>

      {/* Price Filter */}
      <div className="mb-8">
        <h4 className="text-sm font-semibold text-gray-800 mb-3">
          Price Range
        </h4>
        <input
          type="range"
          min="0"
          max="250"
          value={priceRange}
          onChange={(e) => setPriceRange(Number(e.target.value))}
          className="w-full accent-blue-600"
        />
        <div className="flex items-center justify-between mt-2">
          <span className="text-xs text-gray-500">$0</span>
          <span className="text-sm font-medium text-gray-800">
            Up to ${priceRange}
          </span>
        </div>
      </div>

      {/* Rating Filter */}
      <div className="mb-4">
        <h4 className="text-sm font-semibold text-gray-800 mb-3">Rating</h4>
        <div className="space-y-2.5">
          {[4, 3, 2].map((r) => (
            <label
              key={r}
              className="flex items-center gap-2.5 cursor-pointer group"
            >
              <input
                type="checkbox"
                className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
              />
              <span className="flex items-center gap-1 text-sm text-gray-600 group-hover:text-gray-900 transition-colors">
                {Array.from({ length: r }).map((_, i) => (
                  <FaStar key={i} className="w-3 h-3 text-yellow-400" />
                ))}
                <span className="ml-1">& up</span>
              </span>
            </label>
          ))}
        </div>
      </div>
    </div>
  );

  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Sub Navbar */}
        <div className="flex items-center justify-between flex-wrap gap-4 pb-6 border-b border-gray-100 mb-8">
          <div>
            <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
              All Products
            </h1>
            <p className="text-sm text-gray-500 mt-1">
              {products.length} products found
            </p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile Filter Toggle */}
            <button
              onClick={() => setMobileFiltersOpen(true)}
              className="lg:hidden flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-200 px-4 py-2 rounded-full"
            >
              <FaFilter className="w-3.5 h-3.5" />
              Filters
            </button>

            {/* View toggle */}
            <div className="hidden sm:flex items-center border border-gray-200 rounded-full p-1">
              <button className="p-1.5 rounded-full bg-blue-600 text-white">
                <FaTh className="w-3.5 h-3.5" />
              </button>
              <button className="p-1.5 rounded-full text-gray-500">
                <FaList className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Sort Dropdown */}
            <div className="relative">
              <button
                onClick={() => setSortOpen(!sortOpen)}
                className="flex items-center gap-2 text-sm font-medium text-gray-700 border border-gray-200 px-4 py-2 rounded-full hover:border-gray-300 transition-colors"
              >
                Sort: <span className="text-gray-900">{selectedSort}</span>
                <FaChevronDown
                  className={`w-3 h-3 transition-transform ${sortOpen ? 'rotate-180' : ''}`}
                />
              </button>

              {sortOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-white border border-gray-100 rounded-xl shadow-lg py-2 z-20">
                  {sortOptions.map((option) => (
                    <button
                      key={option}
                      onClick={() => {
                        setSelectedSort(option);
                        setSortOpen(false);
                      }}
                      className={`w-full text-left text-sm px-4 py-2 hover:bg-gray-50 transition-colors ${
                        selectedSort === option
                          ? 'text-blue-600 font-medium'
                          : 'text-gray-600'
                      }`}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Main Layout */}
        <div className="flex gap-8">
          {/* Sidebar - Desktop */}
          <aside className="hidden lg:block w-64 shrink-0">
            <FilterSidebar />
          </aside>

          {/* Mobile Filter Drawer */}
          {mobileFiltersOpen && (
            <div className="fixed inset-0 z-50 lg:hidden">
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="absolute left-0 top-0 h-full w-72 bg-white p-6 overflow-y-auto">
                <button
                  onClick={() => setMobileFiltersOpen(false)}
                  className="absolute top-4 right-4 text-gray-500"
                >
                  <FaTimes className="w-5 h-5" />
                </button>
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {products.map((product) => (
                <ProductCard key={product._id} product={product} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Products;
