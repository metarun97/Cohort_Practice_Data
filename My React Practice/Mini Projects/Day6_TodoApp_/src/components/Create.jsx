import { nanoid } from 'nanoid';
import { ToastContainer, toast } from 'react-toastify';
import { useForm } from 'react-hook-form';

const Create = (props) => {
  const todos = props.todos;
  const settodos = props.settodos;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  // ^ Submit Handler:-
  const submitHandler = (data) => {
    data.isCompleted = false;
    data.id = nanoid();
    // * Lenthy Trick:-
    // const copyTodos = [...todos];
    // copyTodos.push(data);
    // settodos(copyTodos);

    // * Short Trick:-
    settodos([...todos, data]);
    reset();
    toast.success('Todo created successfully', {
      autoClose: 3000,
    });
  };
  return (
    <div className="w-1/2">
      <h1 className="text-7xl  mb-12">
        Set <span className="text-red-500">reminder</span> for tasks
      </h1>
      <form action="" onSubmit={handleSubmit(submitHandler)}>
        <input
          className="border-0 outline-0 border-b-2 border-black text-6xl"
          type="text"
          placeholder="Enter todo title..."
          {...register('title')}
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
