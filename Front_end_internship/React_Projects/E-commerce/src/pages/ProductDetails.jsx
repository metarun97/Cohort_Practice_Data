import { useParams } from 'react-router-dom';

const ProductDetails = ({ allProducts }) => {
  const { id } = useParams();
  // console.log(id);

  const singleProductDets = allProducts.find((p) => p.id === Number(id));
  console.log(singleProductDets);

  // console.log(allProducts);
  return (
    <div className="mt-15">
      <div className="w-full flex p-10">
        <div className="left w-1/2 flex items-center justify-center">
          <div className="left aspect-square my-35">
            <div className="w-full h-full object-cover">
              <img src={singleProductDets.image} alt={singleProductDets.name} />
            </div>
          </div>
        </div>
        <div className="right w-1/2 items-center justify-center">
          <div className="px-5 flex flex-col items-center my-35 gap-5">
            <h2 className="text-7xl font-semibold text-blue-950">
              {singleProductDets.name}
            </h2>
            <h3 className="text-4xl font-semibold text-slate-400">
              {singleProductDets.description}
            </h3>
            <p className='text-slate-400 text-lg w-[60%] text-center'>{singleProductDets.specifications}</p>
            <h4 className="text-5xl"> ₹ {singleProductDets.price}</h4>
            <button className="mt-4 w-fit bg-blue-500 px-16 py-3 text-2xl text-white rounded-lg transition duration-100 hover:bg-blue-600 cursor-pointer">
              Add to Card
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
