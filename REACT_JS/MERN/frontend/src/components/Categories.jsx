import React, { useEffect, useState } from 'react';

const Categories = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const res = await fetch('http://localhost:3000/api/ecom/category');
      const result = await res.json();
      console.log(result.categories);
    };

    fetchCategories();
  }, []);

  return <div>Categories</div>;
};

export default Categories;
