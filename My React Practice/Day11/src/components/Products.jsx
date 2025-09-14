import { useNavigate } from 'react-router-dom';

const Products = () => {
  const navigate = useNavigate();
  const navigateHandler = (name) => {
    navigate(`/products/details/${name}`);
  };
  return (
    <div className="flex flex-col gap-5">
      <h2 className="text-5xl text-thin">Products</h2>
      <div>
        <h1 className="text-3xl">Product 1</h1>
        <button
          onClick={() => navigateHandler('Product 1')}
          className="px-5 py-2.5 bg-amber-500 text-white rounded cursor-pointer"
        >
          See details
        </button>
      </div>
      <div>
        <h1 className="text-3xl">Product 2</h1>
        <button
          onClick={() => navigateHandler('Product 2')}
          className="px-5 py-2.5 bg-amber-500 text-white rounded cursor-pointer"
        >
          See details
        </button>
      </div>
      <div>
        <h1 className="text-3xl">Product 3</h1>
        <button
          onClick={() => navigateHandler('Product 3')}
          className="px-5 py-2.5 bg-amber-500 text-white rounded cursor-pointer"
        >
          See details
        </button>
      </div>
    </div>
  );
};

export default Products;
