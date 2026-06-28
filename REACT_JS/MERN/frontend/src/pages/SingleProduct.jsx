import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ProductDetail from '../components/ProductDetail';

const SingleProduct = () => {
  const [singleProduct, setSingleProduct] = useState([]);
  const { id } = useParams();
  // console.log(id);

  useEffect(() => {
    const fetchSingleProduct = async () => {
      try {
        const res = await fetch(`http://localhost:3000/api/products/${id}`);
        const result = await res.json();
        // console.log(result.data);
        setSingleProduct(result.data);
      } catch (error) {
        console.error('Error to fetching single product', error);
      }
    };
    fetchSingleProduct();
  }, [id]);

  return (
      <div>
        <ProductDetail key={singleProduct._id} singleProduct={singleProduct} />
    </div>
  );
};

export default SingleProduct;
