import { FaRegFileAlt } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';
import { IoClose } from 'react-icons/io5';
import { motion } from 'motion/react';

const Card = ({ data, reference }) => {
  return (
    <motion.div
      drag
      dragConstraints={reference}
      whileDrag={{ scale: 1.1 }}
      dragElastic={0.1}
      dragTransition={{ bounceStiffness: 300, bounceDamping: 30 }}
      className="relative w-60 h-70 bg-zinc-900 rounded-[30px] text-white px-5 py-10 overflow-hidden"
    >
      <FaRegFileAlt />
      <p className="mt-5 text-sm leading-tight font-semibold">{data.desc}</p>
      <div className="w-full absolute bottom-0 left-0">
        <div className="flex items-center justify-between mb-3 py-3 px-8">
          <h5>{data.fileSize}</h5>
          <span className="w-7 h-7 bg-zinc-600 flex items-center justify-center rounded-full cursor-pointer">
            {data.close ? (
              <IoClose size=".7em" color="#fff" />
            ) : (
              <LuDownload size=".7em" color="#fff" />
            )}
          </span>
        </div>
        {data.tag.isOpen && (
          <div
            className={`w-full py-4 ${data.tag.tagColor == 'green' ? 'bg-green-600' : 'bg-blue-600'} flex items-center justify-center`}
          >
            <h3 className="text-sm font-semibold">{data.tag.tagTitle}</h3>
          </div>
        )}
      </div>
    </motion.div>
  );
};

export default Card;
