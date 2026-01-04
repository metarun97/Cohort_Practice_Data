import shipping from '../../public/logos/delivery.png';
import returnPackage from '../../public/logos/return.png';
import credit from '../../public/logos/credit.png';
import customers from '../../public/logos/customers.png';

const NewsLetter = () => {
  return (
    <>
      <div className="w-full flex flex-col gap-4 my-10 px-2 lg:px-5 py-5">
        <h2 className="text-4xl lg:text-6xl font-bold text-blue-950 text-center">
          Why Choose Us!
        </h2>
        <div className="letters w-full  flex items-center gap-10 justify-evenly flex-wrap">
          <div className="letter max-w-[180px] p-5 flex flex-col items-center gap-4">
            <div className="aspect-square overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={shipping}
                alt=""
              />
            </div>
            <h3 className="text-lg font-bold">Free Delivery</h3>
          </div>
          <div className="letter max-w-[180px]  p-5 flex flex-col items-center gap-4">
            <div className="aspect-square overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={returnPackage}
                alt=""
              />
            </div>
            <h3 className="text-lg font-bold">Easy Return</h3>
          </div>
          <div className="letter max-w-[180px] p-5 flex flex-col items-center gap-4">
            <div className="aspect-square overflow-hidden">
              <img className="w-full h-full object-cover" src={credit} alt="" />
            </div>
            <h3 className="text-lg font-bold">Secure Payment</h3>
          </div>
          <div className="letter max-w-[180px] p-2 flex flex-col items-center gap-4">
            <div className="aspect-square overflow-hidden">
              <img
                className="w-full h-full object-cover"
                src={customers}
                alt=""
              />
            </div>
            <h3 className="text-lg font-bold">10K+ Customers</h3>
          </div>
        </div>
      </div>
      <hr className="text-slate-500 font-bold mt-3 mb-6" />
      <div className="w-full  px-5 lg:px-15 py-10 flex flex-col gap-4 bg-slate-200">
        <h1 className="text-3xl lg:text-4xl font-semibold text-blue-950 ">
          Join Our NewsLetter
        </h1>
        <div className="  flex flex-1 justify-items-start items-center">
          <input
            type="text"
            placeholder="Your Email Adress..."
            className="py-3.5 px-1.5 lg:py-3.5 lg:px-3 w-[100%] border-0 outline-0 lg:w-[30%] bg-white rounded-md lg:text-2xl"
          />
          <button className="px-3.5 py-1.5 lg:px-14 lg:py-3.5 bg-blue-500 text-2xl hover:bg-blue-600 cursor-pointer rounded-md text-white">
            Subscribe
          </button>
        </div>
      </div>
    </>
  );
};

export default NewsLetter;
