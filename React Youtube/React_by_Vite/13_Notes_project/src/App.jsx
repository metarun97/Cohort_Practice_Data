const App = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted');
  };

  return (
    <div className="w-full flex flex-col gap-5 mt-20 px-10 lg:flex lg:flex-row bg-[#333]">
      <div className="w-full lg:w-1/2 ">
        <h1 className="text-center text-6xl text-white text-bold">Add Notes</h1>
        <form
          action=""
          onSubmit={(e) => handleSubmit(e)}
          className="w-full p-8 flex gap-y-6 flex-col items-start text-white"
        >
          <input
            className="p-4 w-full border-0 outline-1 outline-[#ccc] rounded-md"
            type="text"
            placeholder="Enter note heading..."
          />
          <textarea
            className="px-4 pb-10 pt-2 w-full border-0 outline-1 outline-[#ccc] rounded-md"
            placeholder="Enter notes..."
          ></textarea>
          <button className="p-4 text-xl w-full bg-red-500 font-bold border-0  rounded-md cursor-pointer">
            Add Notes
          </button>
        </form>
      </div>
      <div className="w-full h-full lg:w-1/2 bg-slate-400">
        <div className="w-full flex flex-col gap-10 items-center ">
          <h1 className="text-5xl lg:text-6xl text-white text-bold text-center">
            Your Notes...⬇️
          </h1>
          <div className="w-full h-full flex-wrap Notes flex lg:flex-wrap gap-4 bg-red-300 p-4 overflow-hidden overflow-y-auto">
            <div className="note flex flex-col w-65 h-80 bg-amber-300 p-6 rounded-2xl lg:w-52 lg:h-60 overflow-hidden overflow-y-auto">
              <h2 className="text-3xl text-bold text-red-800"></h2>
              <p className="text-l text-[#333]"></p>
            </div>
            <div className="note flex flex-col w-65 h-80 bg-amber-300 p-6 rounded-2xl lg:w-52 lg:h-60 overflow-hidden overflow-y-auto">
              <h2 className="text-3xl text-bold text-red-800"></h2>
              <p className="text-l text-[#333]"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
