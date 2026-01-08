import men from '/logos/menwear.avif';
import women from '/logos/women.jpg';
import shoes from '/logos/electronics.jpg';
import electronics from '/logos/footwear.jpg';

const Catagories = () => {
  return (
    <div className="w-full px-5 lg:px-10 py-5 flex flex-col items-center gap-y-2.5 md:gap-y-5 lg:gap-y-10">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-blue-950">
        Catagories
      </h1>
      <div
        className="w-full cards grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4
        gap-2.5 px-3.5 md:px-7.5 lg:px-15"
      >
        <div className="card w-full aspect-square border-2 bg-white border-slate-200 rounded-lg p-1.5 cursor-pointer">
          <div className="aspect-square">
            <img src={men} alt="" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl text-center font-semibold text-slate-600">Men</h2>
        </div>
        <div className="card  w-full aspect-square border-2 bg-white border-slate-200 rounded-lg p-1.5 cursor-pointer">
          <div className="aspect-square">
            <img src={women} alt="" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl text-center font-semibold text-slate-600">Women</h2>
        </div>
        <div className="card w-full aspect-square border-2 bg-white border-slate-200 rounded-lg p-1.5 cursor-pointer">
          <div className="aspect-square">
            <img src={shoes} alt="" className="w-full h-full object-cover" />
          </div>
          <h2 className="text-2xl text-center font-semibold text-slate-600">Electronics</h2>
        </div>
        <div className="card w-full aspect-square border-2 bg-white border-slate-200 rounded-lg p-1.5 cursor-pointer">
          <div className="aspect-square">
            <img
              src={electronics}
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          <h2 className="text-2xl text-center font-semibold text-slate-600">Footear</h2>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
