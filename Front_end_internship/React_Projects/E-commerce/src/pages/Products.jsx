import allProducts from '../allProducts.json';
import ProductCard from './ProductCard';

const Products = () => {
  return (
    <div className="w-full mt-12">
      <h1 className="text-8xl text-blue-950 font-semibold text-center">
        All Products
      </h1>
      <div className="w-full px-15 py-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {allProducts.map((singleProduct) => {
          return (
            <ProductCard singleProduct={singleProduct} key={singleProduct.id} />
          );
        })}
      </div>
    </div>
  );
};

export default Products;
