import { useQuery } from '@tanstack/react-query';
import React from 'react';
import { Loader } from 'lucide-react';

const Products = () => {
  const getPostData = async () => {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    const res = await fetch('./products.json');
    if (!res.ok) {
      throw new Error(
        `Failed to fetch data status:${res.status} and message:${res.statusText} `,
      );
    }
    const data = await res.json();
    return data.gadgets;
  };

  const { data, isLoading, isError, error } = useQuery({
    queryKey: ['products'],
    queryFn: getPostData,
  });

  if (isLoading) {
    return <Loader />;
  }

  return (
    <div>
      <h1>Products</h1>
      <ul className='flex justify-center flex-wrap items-center gap-10'>
        {data?.map((gadget) => {
          return (
            <div key={gadget.id} className="max-w-sm overflow-hidden rounded-2xl bg-white shadow-lg transition duration-300 hover:-translate-y-1 hover:shadow-xl">
              <img
                src={gadget.image}
                alt={gadget.name}
                className="h-56 w-full object-cover"
              />

              <div className="p-5">
                <div className="mb-2 flex items-center justify-between">
                  <h2 className="text-xl font-bold text-gray-800">
                    {gadget.name}
                  </h2>

                  <span className="rounded-full bg-yellow-100 px-3 py-1 text-sm font-semibold text-yellow-700">
                    ⭐ {gadget.rating}
                  </span>
                </div>

                <p className="text-sm text-gray-500">
                  {gadget.brand} • {gadget.category}
                </p>

                <div className="mt-4 flex items-center justify-between">
                  <span className="text-2xl font-bold text-blue-600">
                    ₹{gadget.price.toLocaleString()}
                  </span>

                  <button className="rounded-lg bg-blue-600 px-4 py-2 font-medium text-white transition hover:bg-blue-700">
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </ul>
    </div>
  );
};

export default Products;
