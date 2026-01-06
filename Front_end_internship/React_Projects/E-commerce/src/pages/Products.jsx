import allProducts from '../allProducts.json';
import ProductCard from './ProductCard';

const Products = ({ search, setSearch }) => {


  return (
    <div className="w-full mt-15">
      <h1 className="text-5xl lg:text-6xl text-blue-950 font-semibold text-center">
        All Products
      </h1>
      <div className="w-full px-5 lg:px-15 py-5 lg:py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {allProducts.map((product) => {
          return (
            <ProductCard product={product} key={product.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
