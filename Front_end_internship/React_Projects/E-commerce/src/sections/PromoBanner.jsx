const PromoBanner = () => {
  return (
    <div className="w-full bg-red-50 px-1.5 lg:px-3 py-2.5 my-10">
      <div className="w-full flex flex-col items-center justify-center gap-2 lg:gap-4 px-1 lg:px-8 py-16">
        <h1 className="text-4xl lg:text-7xl font-semibold leading-tight text-blue-950">
          Limited Time Offer!
        </h1>
        <h3 className="text-l lg:text-3xl font-bold text-blue-950">
          Free Shipping on Orders under ₹ 999
        </h3>
        <button className="px-7.5 py-2 lg:px-15 lg:py-3.5  bg-blue-500 hover:bg-blue-600 text-md lg:text-2xl text-white font-semibold rounded-md cursor-pointer">
          Shop Now
        </button>
      </div>
    </div>
  );
};

export default PromoBanner;
