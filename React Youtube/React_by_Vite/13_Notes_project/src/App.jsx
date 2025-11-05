import { Children, useState } from 'react';

const App = () => {
  const [title, setTitle] = useState('');
  const [detail, setDetail] = useState('');
  const [task, setTask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newTask = [...task];
    newTask.push({ title, detail });
    setTask(newTask);

    console.log(newTask);

    setTitle('');
    setDetail('');
  };

  const deleteNotes = () => {
    console.log('Note deleted');
  };

  return (
    <div className="w-full h-screen flex flex-col gap-5  lg:flex lg:flex-row bg-[#333]">
      <div className="w-full lg:w-1/2 pt-20">
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
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <textarea
            className="px-4 pb-10 pt-2 w-full border-0 outline-1 outline-[#ccc] rounded-md"
            placeholder="Enter notes..."
            value={detail}
            onChange={(e) => setDetail(e.target.value)}
          ></textarea>
          <button className="p-4 text-xl w-full bg-red-500 hover:bg-red-600 transition duration-300 ease-in-out active:scale-95 font-bold border-0  rounded-md cursor-pointer">
            Add Notes
          </button>
        </form>
      </div>
      <div className="lg:w-1/2 lg:border-l-2 border-white pt-20">
        <div className="w-full flex flex-col gap-10 items-center ">
          <h1 className="text-5xl lg:text-6xl text-white text-bold text-center">
            Your Notes...⬇️
          </h1>
          <div className="w-full h-full flex-wrap Notes flex lg:flex-wrap gap-4 p-4 overflow-auto">
            {task.map((elem, idx) => {
              return (
                <div
                  key={idx}
                  className="note relative flex flex-col items-center justify-between w-65 h-80 bg-cover bg-[url('https://static.vecteezy.com/system/resources/previews/010/793/873/non_2x/a-lined-note-paper-covered-with-transparent-tape-on-a-yellow-background-with-a-white-checkered-pattern-free-png.png')] p-7 rounded-2xl lg:w-52 lg:h-65 "
                >
                  <div className="flex flex-col justify-items-start text-start">
                    <h2 className="text-xl text-bold text-red-800">
                      {elem.title}
                    </h2>
                    <p className="text-xs text-[#333]">{elem.detail}</p>
                  </div>
                  <button
                    onClick={deleteNotes}
                    className="py-.5 px-1.75 bg-red-500 text-white rounded-md cursor-pointer"
                  >
                    Delete Note
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
