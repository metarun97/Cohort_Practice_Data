import { useContext } from 'react';
import allProducts from '../data/allProducts.json';
import ProductCard from './../components/ProductCard';
import { searchContext } from '../context/SearchContext';

const Products = () => {
  const { search } = useContext(searchContext);

  const filteredProducts = allProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-10 py-20 px-10 lg:px-20">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
    </>
  );
};

export default Products;
