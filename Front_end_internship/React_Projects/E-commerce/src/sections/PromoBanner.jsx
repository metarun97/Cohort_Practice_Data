const PromoBanner = () => {
  return (
    <div className="w-full bg-red-50 px-1.5 lg:px-3 py-2.5 my-10">
      <div className="w-full flex flex-col items-center justify-center gap-2 lg:gap-4 px-1 lg:px-8 py-16">
        <h1 className="text-4xl md:text-6xl lg:text-8xl font-semibold leading-tight text-blue-950">
          Limited Time Offer!
        </h1>
        <h3 className="text-l md:text-2xl lg:text-4xl font-semibold text-blue-950">
          Free Shipping on Orders under ₹ 999
        </h3>
        <button className="px-8 py-3 md:px-8 md:py-3 lg:px-16 lg:py-5  bg-blue-500 hover:bg-blue-600 text-md md:text-xl lg:text-2xl text-white font-semibold rounded-md cursor-pointer">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
