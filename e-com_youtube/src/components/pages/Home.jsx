import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { increment } from '../../redux/counterSlice';
import ProductCard from './ProductCard';
import axios from 'axios';

const Home = () => {
  const dispatch = useDispatch();
  const [allProducts, setAllProducts] = useState([]);

  const getProducts = () => {
    axios
      .get('https://dummyjson.com/products')
      .then((res) => res.data)
      .then((finalRes) => setAllProducts(finalRes.products));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <section className="py-5">
      <h1 className="text-3xl text-center font-bold">Our Products</h1>
      <div className="max-w-7xl mx-auto grid grid-cols-4 gap-20 mt-5 ">
        {allProducts.map((products, idx) => {
          return <ProductCard key={idx} data={products} />;
        })}
      </div>
    </section>
  );
};

export default Home;
