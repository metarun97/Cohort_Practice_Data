import { useState } from 'react';
import { RxCross2 } from 'react-icons/rx';

const App = () => {
  const [title, setTitle] = useState('');
  const [details, setDetails] = useState('');
  const [task, settask] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const copyTask = [...task];
    copyTask.push({ title, details });
    settask(copyTask);
    console.log(copyTask);
    setTitle('');
    setDetails('');
  };

  const deleteTask = (idx) => {
    const copyTask = [...task];
    copyTask.splice(idx, 1);
    settask(copyTask);
  };

  return (
    <div className="h-screen lg:flex lg:gap-10 bg-[#222] text-white">
      <form
        onSubmit={(e) => handleSubmit(e)}
        action=""
        className="w-full flex flex-col gap-5 lg:w-1/2 p-10"
      >
        <h1 className="text-4xl font-bold mb-5">Notes App</h1>
        <input
          className="px-5 py-3 rounded border-2 border-amber-50"
          type="text"
          value={title}
          placeholder="Enter task..."
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />
        <textarea
          className="px-5 py-3 rounded border-2 border-amber-50"
          id=""
          placeholder="Enter task details..."
          value={details}
          onChange={(e) => {
            setDetails(e.target.value);
          }}
        ></textarea>
        <button className="px-5 py-3 bg-blue-500 rounded hover:bg-blue-600 transition duration-100 ease-in-out cursor-pointer">
          Add Notes
        </button>
      </form>
      <div className="lg:w-1/2 p-10 lg:border-l-2">
        <h1 className="text-4xl font-bold">Recent Notes</h1>
        <div className="flex flex-wrap gap-5 mt-5 h-full overflow-auto">
          {task.map(function (elem, idx) {
            return (
              <div
                key={idx}
                className="bg-white h-52 w-40 rounded-2xl p-4 relative"
              >
                <button
                  onClick={() => deleteTask(idx)}
                  className="absolute right-2 top-4 bg-red-500 p-1 rounded-full cursor-pointer font-bold"
                >
                  <RxCross2 />
                </button>
                <h3 className="text-xl font-bold text-gray-900 leading-tight">
                  {elem.title}
                </h3>
                <p className="text-md text-gray-500 mt-1 leading-tight">
                  {elem.details}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default App;
