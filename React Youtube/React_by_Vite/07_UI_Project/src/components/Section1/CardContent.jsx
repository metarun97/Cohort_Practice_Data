import { IoMdArrowForward } from 'react-icons/io';

const CardContent = (props) => {
  return (
    <div className="w-80 h-full  absolute p-8 flex flex-col justify-between">
      <div className="flex items-center justify-center bg-white w-12 h-12 rounded-full font-medium">
        {props.id + 1}
      </div>
      <div className="flex flex-col gap-12">
        <p className="text-xl text-white font-medium">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Tempora
          delectus veniam, et distinctio laboriosam deleniti alias veritatis
          vitae quo animi!
        </p>
        <div className="flex items-center justify-between">
          <div
            style={{ backgroundColor: props.color }}
            className="text-white  py-4 px-8 rounded-full font-medium"
          >
            {props.tag}
          </div>
          <button
            style={{ backgroundColor: props.color }}
            className="text-white py-4 px-4 rounded-full font-medium"
          >
            <IoMdArrowForward />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
