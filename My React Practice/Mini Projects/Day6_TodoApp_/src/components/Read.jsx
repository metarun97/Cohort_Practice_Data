import { toast, ToastContainer } from 'react-toastify';

const Read = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;

  const deletehandler = (id) => {
    const filteredTodos = todos.filter((todo) => todo.id != id);
    settodos(filteredTodos);
    toast.success('Todo deleted successfully', {
      autoClose: 3000,
    });
  };

  const renderTodos = todos.map((todo) => {
    return (
      <li
        key={todo.id}
        className="text-5xl bg-slate-400 px-2.5 py-7 flex items-center justify-between rounded-xl"
      >
        {todo.title}{' '}
        <span
          onClick={() => deletehandler(todo.id)}
          className="px-5 py-2.5 bg-red-700 hover:bg-red-800 text-white rounded-xl font-600 cursor-pointer"
        >
          Delete
        </span>
      </li>
    );
  });
  return (
    <div className="w-1/2">
      <h1 className="text-7xl">Pending Todos</h1>
      <ol className="flex flex-col mt-12 gap-y-2.5 ">{renderTodos}</ol>
      {/* <ToastContainer /> */}
    </div>
  );
};

export default Read;
