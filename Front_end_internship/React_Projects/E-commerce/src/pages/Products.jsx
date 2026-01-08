import { useContext } from 'react';
import ProductCard from './../components/ProductCard';
import { searchContext } from '../context/SearchContext';

const Products = ({ allProducts }) => {
  const { search } = useContext(searchContext);

  const filteredProducts = allProducts.filter((p) =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <div className="w-full h-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 mt-15 gap-5 py-20 px-2 md:p-4 lg:px-6">
        {filteredProducts.map((product) => (
          <ProductCard key={product.id} product={product} allProducts={allProducts} />
        ))}
      </div>
    </>
  );
};

export default Products;
