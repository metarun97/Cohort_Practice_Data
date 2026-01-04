import bags from '../../public/Png_data/bags-img.png';

const Hero = () => {
  return (
    <>
      <div className="w-full bg-slate-200 lg:flex h-auto">
        <div className="left w-full lg:w-1/2 h-full pt-35 px-3 lg:px-5 flex flex-col items-center justify-self-start gap-y-3 lg:gap-y-5">
          <h2 className="text-[2.35rem] font-[500]  lg:text-7xl lg:font-[400] leading-tight text-blue-900">
            Big Sale 50% Off
          </h2>
          <p className="text-lg lg:text-3xl text-blue-800">
            Trendy Products for Everyday Life
          </p>
          <div className="btns flex gap-3">
            <button className="px-5 py-2.5 lg:px-6 lg:py-3 lg:text-2xl rounded-md bg-blue-500 text-white font-bold cursor-pointer">
              Shop Now
            </button>
            <button className="px-5 py-2.5 lg:px-6 lg:py-3 lg:text-2xl rounded-md bg-transparent border-2 border-blue-500 text-blue-500 font-bold cursor-pointer">
              View Collections
            </button>
          </div>
        </div>
        <div className="right w-full lg:w-1/2 h-full pt-20 flex justify-center items-start px-3">
          <div className="w-full flex justify-center max-w-[350px] lg:max-w-[450px]">
            <img className="w-full h-auto object-contain" src={bags} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
