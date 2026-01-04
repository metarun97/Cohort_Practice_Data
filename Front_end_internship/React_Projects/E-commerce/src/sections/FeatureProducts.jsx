import laptop from '/feture_images/laptop_dell.webp';
import iphone from '/feture_images/iphone_17.jpg';
import red_goun from '/feture_images/red-goun.avif';
import adidas from '/feture_images/adidas.jpg';

const FeatureProducts = () => {
  return (
    <div className="w-full px-4 lg:px-5 py-5 flex flex-col items-center gap-y-5">
      <h1 className="text-5xl lg:text-6xl text-center font-semibold text-blue-950">Featured Products</h1>
      <div className="w-full cards flex flex-wrap items-center justify-center px-2.5 gap-5 lg:gap-10 pt-5">
        <div className="card max-w-[300px] lg:max-w-[350px] w-full flex flex-col items-center gap-2 bg-slate-200 rounded-lg p-4">
          <div className="aspect-square overflow-hidden">
            <img className="w-full h-full object-cover" src={laptop} alt="" />
          </div>
          <div className="desc flex flex-col gap-1 items-center">
            <h2 className="text-2xl text-center font-bold">Dell Laptop</h2>
            <p className="text-xl font-semibold text-slate-600">₹ 62,590</p>
          </div>
          <button className="px-4 py-2 text-xl bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-md">
            Add to cart
          </button>
        </div>
        <div className="card max-w-[300px] lg:max-w-[350px] w-full flex flex-col items-center gap-2 bg-slate-200 rounded-lg p-4">
          <div className="aspect-square overflow-hidden">
            <img className="w-full h-full object-cover" src={iphone} alt="" />
          </div>
          <div className="desc flex flex-col gap-1 items-center">
            <h2 className="text-2xl text-center font-bold">iPhone 17 Pro</h2>
            <p className="text-xl font-semibold text-slate-600">₹ 70,590</p>
          </div>
          <button className="px-4 py-2 text-xl bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-md">
            Add to cart
          </button>
        </div>
        <div className="card max-w-[300px] lg:max-w-[350px] w-full flex flex-col items-center gap-2 bg-slate-200 rounded-lg p-4">
          <div className="aspect-auto overflow-hidden">
            <img className="w-full h-full object-cover" src={red_goun} alt="" />
          </div>
          <div className="desc flex flex-col gap-1 items-center">
            <h2 className="text-2xl text-center font-bold">Red Goun</h2>
            <p className="text-xl font-semibold text-slate-600">₹ 2,890</p>
          </div>
          <button className="px-4 py-2 text-xl bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-md">
            Add to cart
          </button>
        </div>
        <div className="card max-w-[300px] lg:max-w-[350px] w-full flex flex-col items-center gap-2 bg-slate-200 rounded-lg p-4">
          <div className="aspect-square overflow-hidden">
            <img className="w-full h-full object-cover" src={adidas} alt="" />
          </div>
          <div className="desc flex flex-col gap-1 items-center">
            <h2 className="text-2xl text-center font-bold">Addidas Shoes</h2>
            <p className="text-xl font-semibold text-slate-600">₹ 4,780</p>
          </div>
          <button className="px-4 py-2 text-xl bg-blue-600 hover:bg-blue-700  text-white rounded-md">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FeatureProducts;
