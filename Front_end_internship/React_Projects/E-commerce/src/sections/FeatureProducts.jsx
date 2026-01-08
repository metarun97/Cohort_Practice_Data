const FeatureProducts = ({ allProducts }) => {
  const fourProducts = allProducts.slice(0, 4);

  return (
    <div className="w-full px-4 lg:px-5 py-5 flex flex-col items-center gap-y-5">
      <h1 className="text-5xl md:text-6xl lg:text-7xl text-center font-semibold text-blue-950">
        Featured Products
      </h1>
      <div className="w-full cards grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 px-2.5 md:px-5 lg:px-10">
        {fourProducts.map((p) => (
          <div
            key={p.id}
            className="card w-full flex flex-col items-center gap-2 border-2 bg-white border-slate-200 rounded-lg p-2 cursor-pointer transition-all duration-200 hover:shadow-xl shadow-slate-400"
          >
            <div className="aspect-square overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={p.image}
                alt={p.name}
              />
            </div>
            <div className="desc flex flex-col gap-1 items-center">
              <h2 className="text-2xl text-center font-bold">{p.name}</h2>
              <p className="text-xl font-semibold text-slate-600">
                ₹ {p.price}
              </p>
            </div>
            <button className="px-4 py-2 text-xl bg-blue-600 hover:bg-blue-700 cursor-pointer text-white rounded-md">
              Add to cart
            </button>
          </div>
        ))}

        {/* <div className="card w-full flex flex-col items-center gap-2 bg-blue-200 rounded-lg p-4">
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
        <div className="card w-full flex flex-col items-center gap-2 bg-blue-200 rounded-lg p-4">
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
        <div className="card w-full flex flex-col items-center gap-2 bg-blue-200 rounded-lg p-4">
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
        </div> */}
      </div>
    </div>
  );
};

export default FeatureProducts;
