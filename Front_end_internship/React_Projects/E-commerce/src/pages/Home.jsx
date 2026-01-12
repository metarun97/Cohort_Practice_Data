import { useState } from 'react';
import Catagories from '../sections/Catagories';
import FeatureProducts from '../sections/FeatureProducts';
import Hero from '../sections/Hero';
import NewsLetter from '../sections/NewsLetter';
import PromoBanner from '../sections/PromoBanner';

const Home = ({ allProducts }) => {
  return (
    <>
      <Hero />
      <Catagories allProducts={allProducts} />
      <hr className="text-slate-500 font-bold mt-6" />
      <FeatureProducts allProducts={allProducts} />
      <hr className="text-slate-500 font-bold mt-6" />
      <PromoBanner />
      <hr className="text-slate-500 font-bold mt-6" />
      <NewsLetter />
    </>
  );
};

export default Home;
