import { useNavigate } from 'react-router-dom';

const ServiceDetail = () => {
  const navigate = useNavigate();
  return (
    <div>
      <div>
        <h1>More service details</h1>
        <p>Services details for peoples...</p>
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

export default ServiceDetail;
