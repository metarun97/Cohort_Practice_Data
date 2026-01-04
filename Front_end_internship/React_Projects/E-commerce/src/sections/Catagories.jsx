import men from '/logos/jacket.png';
import women from '/logos/woman-clothes.png';
import shoes from '/logos/device.png';
import electronics from '/logos/sneakers.png';

const Catagories = () => {
  return (
    <div className="w-full px-5 lg:px-10 py-5 flex flex-col items-center gap-y-5">
      <h1 className="text-5xl lg:text-6xl font-semibold text-blue-950">
        Catagories
      </h1>
      <div className="w-full cards flex flex-wrap items-center justify-center gap-10 lg:gap-20 pt-5">
        <div className="card max-w-[280px] lg:max-w-[250px] w-full bg-slate-200 rounded-lg py-5 px-10">
          <img src={men} alt="" />
          <h2 className="text-2xl text-center font-bold">Men</h2>
        </div>
        <div className="card max-w-[280px] lg:max-w-[250px] w-full  bg-slate-200 rounded-lg py-5 px-10">
          <img src={women} alt="" />
          <h2 className="text-2xl text-center font-bold">Women</h2>
        </div>
        <div className="card max-w-[280px] lg:max-w-[250px] w-full bg-slate-200 rounded-lg py-5 px-10">
          <img src={shoes} alt="" />
          <h2 className="text-2xl text-center font-bold">Electronics</h2>
        </div>
        <div className="card max-w-[280px] lg:max-w-[250px] w-full  bg-slate-200 rounded-lg py-5 px-10">
          <img src={electronics} alt="" />
          <h2 className="text-2xl text-center font-bold">Shoes</h2>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
