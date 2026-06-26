import React, { useEffect, useState } from 'react';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      const res = await fetch('http://localhost:3000/api/ecom/products');
      const result = await res.json();
      // console.log(result.data);
      setProducts(result.data);
    };

    fetchProducts();
  }, []);

  return (
    <div className='max-w-7xl mx-auto'>
      <h1 className="text-3xl md:text-5xl font-semibold text-center my-10">
        All Products
      </h1>
      <div className="flex justify-start items-center gap-8 flex-wrap my-10">
        {products.map((product) => {
          return <ProductCard key={product._id} product={product} />;
        })}
      </div>
    </div>
  );
};

export default Products;
