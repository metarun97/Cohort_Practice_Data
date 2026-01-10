import bags from '/Png_data/bags-img.png?url';

const Hero = () => {
  return (
    <>
      <div className="w-full bg-slate-200 lg:flex h-auto px-1">
        <div className="left w-full h-auto lg:w-1/2 pt-35 lg:px-5 flex flex-col items-center justify-self-start gap-y-1.5 md:gap-y-3 lg:gap-y-4">
          <h2 className="text-[40px] lg:text-7xl md:text-4xl leading-tighter text-blue-900">
            Big Sale 50% Off
          </h2>
          <p className="text-l md:text-xl lg:text-3xl text-blue-800">
            Trendy Products for Everyday Life
          </p>
          <div className="btns flex gap-3">
            <button className="px-3 py-1.5 md:px-6 md:py-3 lg:px-8 lg:py-4 lg:text-2xl rounded-md bg-blue-500 text-white font-bold cursor-pointer">
              Shop Now
            </button>
            <button className="px-5 py-2.5 lg:px-6 lg:py-3 lg:text-2xl rounded-md bg-transparent border-2 border-blue-500 text-blue-500 font-bold cursor-pointer">
              View Collections
            </button>
          </div>
        </div>
        <div className="right w-full lg:w-1/2 h-full pt-20 flex justify-center items-start leading-tight px-3 bg">
          <div className="grid justify-items-center aspect-auto mt-10">
            <img className="w-full h-full object-cover" src={bags} alt="" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Hero;
