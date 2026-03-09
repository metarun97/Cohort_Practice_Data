import { Suspense, useEffect, useState } from 'react';
import axios from '../api/axiosconfig';
import InfiniteScroll from 'react-infinite-scroll-component';
import ProductTemplate from '../components/ProductTemplate';

const Products = () => {
  // const { products } = useSelector((state) => state.productReducer);
  const [products, setProducts] = useState([]);
  const [hasMore, sethasMore] = useState(true);

  const fetchProducts = async () => {
    try {
      const { data } = await axios.get(
        `/products?_limit=6&_start=${products.length}`,
      );
      // console.log(res);
      if (data.length === 0) {
        sethasMore(false);
        setProducts(data);
      } else {
        sethasMore(true);
      }
      setProducts([...products, ...data]);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <InfiniteScroll
      dataLength={products.length}
      next={fetchProducts}
      loader={<h4>Loading...</h4>}
      hasMore={hasMore}
    >
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 px-6 py-10">
        {products?.map((product) => (
          <Suspense
            key={product.id}
            fallback={
              <h1 className="text-5xl text-center text-yellow-500">
                LOADING...
              </h1>
            }
          >
            <ProductTemplate product={product} />
          </Suspense>
        ))}
      </div>
    </InfiniteScroll>
  );
};

export default Products;
