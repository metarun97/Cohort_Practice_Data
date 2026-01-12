import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const Catagories = ({ allProducts }) => {
  const categorySection = [
    {
      name: 'Footwear',
      maincategory: 'footwear',
      image:
        'https://content.jdmagicbox.com/v2/comp/chennai/80/044papp20081125iro263280/catalogue/fashion-footwear-t-nagar-chennai-shoe-dealers-jko40sdgp4-250.jpg',
    },
    {
      name: 'Gadgets',
      maincategory: 'gadgets',
      image:
        'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/6384511/jbareham_160418_0931_0086_FINAL_NO_BUFFER_5MB_02.0.jpg?quality=90&strip=all&crop=0%2C4.116413214473%2C100%2C91.767173571054&w=2400',
    },
    {
      name: 'Men',
      maincategory: 'menwear',
      image:
        'https://img.freepik.com/premium-photo/big-choice-young-guy-modern-store-with-new-clothes-elegant-expensive-wear-men_146671-48496.jpg',
    },
    {
      name: 'Women',
      maincategory: 'womenwear',
      image: 'https://img.freepik.com/free-photo/clothes-hang_1339-2012.jpg',
    },
  ];

  const handleFetchCategory = () => {
    toast.success('Category fetched Successfully!');
  };

  // console.log(SingleItem);

  // console.log(allProducts);
  return (
    <div className="w-full px-5 lg:px-10 py-5 flex flex-col items-center gap-y-2.5 md:gap-y-5 lg:gap-y-10">
      <h1 className="text-4xl md:text-5xl lg:text-7xl font-semibold text-blue-950">
        Catagories
      </h1>
      <div
        className="w-full cards grid justify-items-center grid-cols-1 md:grid-cols-2 lg:grid-cols-4
        gap-2.5 px-3.5 md:px-7.5 lg:px-15"
      >
        {categorySection.map((item) => {
          return (
            <Link
              onClick={handleFetchCategory}
              to={`/category/${item.maincategory}`}
              key={item.maincategory}
              className="card w-full aspect-square border-2 bg-white border-slate-200 rounded-lg p-1.5 cursor-pointer"
            >
              <div className="aspect-square">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h2 className="text-2xl text-center font-semibold text-slate-600">
                {item.name}
              </h2>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default Catagories;
