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
      <div
        className="w-full cards grid justify-items-center  my-auto grid-cols-1 md:grid-cols-2 lg:grid-cols-4
        gap-2.5 px-3.5 md:px-7.5 lg:px-15"
      >
        <div className="card w-full bg-blue-200 rounded-lg p-4">
          <img src={men} alt="" />
          <h2 className="text-2xl text-center font-bold">Men</h2>
        </div>
        <div className="card  w-full bg-blue-200 rounded-lg p-4">
          <img src={women} alt="" />
          <h2 className="text-2xl text-center font-bold">Women</h2>
        </div>
        <div className="card w-full bg-blue-200 rounded-lg p-4">
          <img src={shoes} alt="" />
          <h2 className="text-2xl text-center font-bold">Electronics</h2>
        </div>
        <div className="card w-full bg-blue-200 rounded-lg p-4">
          <img src={electronics} alt="" />
          <h2 className="text-2xl text-center font-bold"></h2>
        </div>
      </div>
    </div>
  );
};

export default Catagories;
