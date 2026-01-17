import { useNavigate } from 'react-router-dom';

const Nav2 = () => {
  const navigate = useNavigate();

  return (
    <div className="p-2 bg-cyan-600 flex gap-x-2">
      <button
        className="px-4 py-2 rounded bg-red-500 cursor-pointer active:scale-95"
        onClick={() => {
          navigate('/');
        }}
      >
        Back to Homepage
      </button>
      <button
        className="px-4 py-2 rounded bg-red-500 cursor-pointer active:scale-95"
        onClick={() => {
          navigate(-1);
        }}
      >
        Back
      </button>
      <button
        className="px-4 py-2 rounded bg-red-500 cursor-pointer active:scale-95"
        onClick={() => {
          navigate(+1);
        }}
      >
        Next
      </button>
    </div>
  );
};

export default Nav2;
