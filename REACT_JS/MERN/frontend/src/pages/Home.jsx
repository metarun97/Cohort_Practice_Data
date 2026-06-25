import React, { useEffect, useState } from 'react';
import Hero from '../home/Hero';
import Category from '../home/Category';
import Feature from '../home/Feature';

const Home = () => {
  return (
    <div>
      <Hero />
      <Feature />
      <Category />
    </div>
  );
};

export default Home;
