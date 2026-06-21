import React from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar2 = () => {
  const navigate = useNavigate();

  return (
    <div className="px-2 py-4 bg-amber-600">
      <button
        className="bg-red-600 px-2 py-1.5 rounded text-white"
        onClick={() => {
          navigate('/');
        }}
      >
        Return to home
      </button>
      <button
        className="bg-green-600 px-2 py-1.5 rounded text-white"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
    </div>
  );
};

export default Navbar2;
