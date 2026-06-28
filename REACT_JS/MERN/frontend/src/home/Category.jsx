import React, { useEffect, useState } from 'react';
import CategoryCard from './../components/CategoryCard';

const Category = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('http://localhost:3000/api/category/');
      const result = await res.json();
      // console.log(result.data);
      setCategory(result.data);
    };

    fetchCategories();
  }, []);
  return (
    <div className="max-w-7xl mx-auto my-10">
      <h1 className='text-3xl md:text-5xl font-semibold text-center my-10'>Shop by Category</h1>
      <div className="flex flex-wrap justify-center-safe items-center gap-5">
        {category.map((cat) => {
          return <CategoryCard key={cat._id} category={cat} />;
        })}
      </div>
    </div>
  );
};

export default Category;
