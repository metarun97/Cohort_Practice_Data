import { useState } from "react";
import Navbar from "./components/Navbar";
import { v4 as uuidv4 } from "uuid";

const App = () => {

  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState('');

  const handleDelete = () => {

  }
  const handleEdit = () => {

  }
  const handleAdd = () => {
    setTodos([...todos, { id: uuidv4(), todo, isCompleted: false }]);
    setTodo("");
    console.log(todos)
  }

  const handleCheckbox = (e) => {
    let id = e.target.name;
    let index = todos.findIndex(item => {
      return item.id === id;
    })
    let newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
  }

  return (
    <>
      <Navbar />
      <div className="container mx-auto bg-violet-100 my-2 p-3 rounded-md min-h-[90vh]">
        <div className="addTodo">
          <h2 className="font-semibold text-xl">Add Todo</h2>
          <input onChange={(e) => setTodo(e.target.value)} value={todo} className="px-3 py-1 w-80 outline-none border-2 border-violet-200 rounded-md bg-white" type="text" />
          <button onClick={handleAdd} className="px-3 py-1.5 rounded-md m-2 text-sm bg-violet-800 hover:bg-violet-950 text-white font-semibold cursor-pointer">Add</button>
        </div>
        <h2 className="font-semibold text-xl">Your Todos</h2>
        <div className="todos flex flex-col gap-2.5">
          {todos.map(item => {
            return <div key={item.id} className="todo w-80 flex items-center justify-between">
              <input onChange={handleCheckbox} type="checkbox" name={item.id} value={item.isCompleted} id="" />
              <div className={item.isCompleted ? "line-through" : ""}>{item.todo}</div>
              <div className="buttons flex gap-1.5">
                <button onClick={handleEdit} className="px-3 py-1.5 rounded-md text-sm bg-green-800 hover:bg-green-950 text-white font-semibold cursor-pointer">Edit</button>
                <button onClick={handleDelete} className="px-3 py-1.5 rounded-md text-sm bg-red-800 hover:bg-red-950 text-white font-semibold cursor-pointer">Delete</button>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App;
