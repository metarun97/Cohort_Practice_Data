import { useState } from 'react';
import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';

const Create = (props) => {
  const [title, settitle] = useState('');
  const todos = props.todos;
  const settodos = props.settodos;

  // ^ Submit Handler:-
  const submitHandler = (e) => {
    e.preventDefault();

    if (title.length === 0) {
      return;
    } else {
      const newTodo = {
        id: nanoid(),
        title: title,
        isCompleted: false,
      };
      // ^ Large way:-
      // const copyTodo = [...todos];
      // copyTodo.push(newTodo);
      // settodos(copyTodo);
      // console.log(copyTodo);

      // ^ Short way:-
      settodos([...todos, newTodo]);
      toast.success('Todo created successfully', {
        autoClose: 3000,
      });
      settitle('');
    }
  };
  return (
    <div className="w-1/2">
      <h1 className="text-7xl  mb-12">
        Set <span className="text-red-500">reminder</span> for tasks
      </h1>
      <form action="" onSubmit={submitHandler}>
        <input
          className="border-0 outline-0 border-b-2 border-black text-6xl"
          type="text"
          placeholder="Enter todo title..."
          onChange={(e) => settitle(e.target.value)}
          value={title}
        />
        <br />
        <br />
        <button className="text-6xl bg-green-700 hover:bg-green-800 rounded-xl border-0 outline-0 px-5 py-2.5 text-white font-600 cursor-pointer">
          Create Todo
        </button>
        <ToastContainer />
      </form>
    </div>
  );
};

export default Create;
