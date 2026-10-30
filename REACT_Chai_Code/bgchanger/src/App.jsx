import { useState } from "react";

function App() {

  const [color, setColor] = useState('olive');

  return (
    <div className='w-full h-screen duration-200' style={{ backgroundColor: color }}>


      <div className="fixed flex flex-wrap justify-center bottom-12 px-2 inset-x-0">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-full">
          <button
            onClick={() => setColor("red")}
            className="bg-red-500 text-white px-3 py-2  outline-none rounded-full cursor-pointer " style={{ backgroundColor: "red" }}>
            Red
          </button>
          <button
            onClick={() => setColor("green")}
            className="text-white px-3 py-2  outline-none rounded-full cursor-pointer" style={{ backgroundColor: "green" }}>
            Green
          </button>
          <button
            onClick={() => setColor("blue")}
            className="bg-blue-500 text-white px-3 py-2  outline-none rounded-full cursor-pointer" style={{ backgroundColor: "blue" }}>
            Blue
          </button>
          <button
            onClick={() => setColor("purple")}
            className="bg-blue-500 text-white px-3 py-2  outline-none rounded-full cursor-pointer" style={{ backgroundColor: "purple" }}>
            Purple
          </button>
          <button
            onClick={() => setColor("olive")}
            className="bg-blue-500 text-white px-3 py-2  outline-none rounded-full cursor-pointer" style={{ backgroundColor: "olive" }}>
            Olive
          </button>
          <button
            onClick={() => setColor("teal")}
            className="bg-blue-500 text-white px-3 py-2  outline-none rounded-full cursor-pointer" style={{ backgroundColor: "teal" }}>
            Teal
          </button>
          <button
            onClick={() => setColor("gray")}
            className="bg-blue-500 text-white px-3 py-2  outline-none rounded-full cursor-pointer" style={{ backgroundColor: "gray" }}>
            Gray
          </button>
        </div>
      </div>
    </div>
  )
}

export default App
