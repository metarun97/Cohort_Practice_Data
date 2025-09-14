import { Outlet, useNavigate } from 'react-router-dom';

const Services = () => {
  const navigate = useNavigate();
  return (
    <div className='flex flex-col gap-2.5'>
      <div>
        <h1>More services</h1>
        <p>Choose us for better options</p>
        <button
          onClick={() => navigate('/services/details')}
          className="px-5 py-2.5 bg-amber-500 text-white rounded cursor-pointer"
        >
          See Services
        </button>
      </div>
      <div>
        <h1>More Updated</h1>
        <p>Choose updates for better options</p>
        <button
          onClick={() => navigate('/services/update')}
          className="px-5 py-2.5 bg-amber-500 text-white rounded cursor-pointer"
        >
          See Updates
        </button>
      </div>
      <hr className="my-2" />
      <Outlet />
    </div>
  );
};

export default Services;
