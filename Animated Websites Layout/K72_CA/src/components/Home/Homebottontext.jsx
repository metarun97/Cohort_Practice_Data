import { Link } from 'react-router-dom';

const Homebottontext = () => {
  return <div className='font-[font2]  flex items-center justify-center gap-2.5'>
    <Link className='text-[6vw] hover:border-[#D3FD50] hover:text-[#D3FD50] text-white uppercase border-5 border-white rounded-full leading-[6vw] px-10 pt-5' to='/projects'>Projects</Link>
    <Link className='text-[6vw] hover:border-[#D3FD50] hover:text-[#D3FD50] text-white uppercase border-5 border-white rounded-full leading-[6vw] px-10 pt-5' to='/agence'>Agence</Link>
  </div>;
};

export default Homebottontext;
