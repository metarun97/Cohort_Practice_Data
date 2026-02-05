import { FaRegFileAlt } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';

const Card = () => {
  return (
    <div className="relative w-60 h-70 bg-zinc-900 rounded-[30px] text-white px-5 py-10 overflow-hidden">
      <FaRegFileAlt />
      <p className="mt-5 text-sm leading-tight font-semibold">
        Lorem ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="w-full absolute bottom-0 left-0">
        <div className="flex items-center justify-between mb-3 py-3 px-8">
          <h5>.4mb</h5>
          <span className="w-7 h-7 bg-zinc-600 flex items-center justify-center rounded-full cursor-pointer">
            <LuDownload size=".7em" color="#fff" />
          </span>
        </div>
        <div className="w-full py-4 bg-green-500 flex items-center justify-center">
          <h3 className='text-sm font-semibold'>Download now</h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
