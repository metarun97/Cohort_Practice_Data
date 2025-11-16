import axios from 'axios';
import { useEffect, useState } from 'react';
import Card from './components/Card';

const App = () => {
  const [userdata, setUserdata] = useState([]);
  const [index, setindex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=10`
    );
    setUserdata(response.data);
    // console.log(response.data);
  };

  useEffect(() => {
    getData();
  }, [index]);

  let printuserData = (
    <h1 className="text-4xl text-gray-400 font-bold absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 ">
      Loading...
    </h1>
  );

  if (userdata.length > 0) {
    printuserData = userdata.map(function (elem, idx) {
      return (
        <div key={idx}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <div className="w-full h-screen overflow-auto bg-black p-4">
      {/* <h1 className="text-5xl text-white fixed">{index}</h1> */}
      <div className="flex h-[85vh] flex-wrap gap-4">{printuserData}</div>
      <div className="flex items-center justify-center gap-5 py-5">
        <button
          onClick={() => {
            if (index > 1) {
              setindex(index - 1);
              setUserdata([]);
            }
          }}
          className="px-4 py-2 bg-amber-400 rounded text-white font-bold hover:bg-amber-500 active:scale-95 cursor-pointer"
          style={{ opacity: index == 1 ? 0.5 : 1 }}
        >
          Prev
        </button>
        <h4 className="text-white">Page {index}</h4>
        <button
          onClick={() => {
            setUserdata([]);
            setindex(index + 1);
          }}
          className="px-4 py-2 bg-amber-400 rounded text-white font-bold hover:bg-amber-500 active:scale-95 cursor-pointer"
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default App;
