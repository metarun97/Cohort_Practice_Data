import { useNavigate, useParams } from 'react-router-dom';

const ProductDetail = () => {
  const navigate = useNavigate();
  const params = useParams();
  // console.log(params);

  return (
    <div>
      <div>
        <h1>{params.name}</h1>
        <p>Product details</p>
        <button
          onClick={() => navigate(-1)}
          className="px-5 py-2.5 bg-amber-500 text-white rounded cursor-pointer"
        >
          Go back
        </button>
      </div>
    </div>
  );
};

export default ProductDetail;
