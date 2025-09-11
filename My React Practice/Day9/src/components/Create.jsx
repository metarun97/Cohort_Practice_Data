import { nanoid } from 'nanoid';
import { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import { todocontext } from '../Wrapper';

const Create = () => {
  const [todos, settodos] = useContext(todocontext);


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
    toast.success('Todo created successfully');
  };
  // console.log(errors);
  return (
    <div className="w-1/2">
      <h1 className="text-7xl mb-12">
        Set <span className="text-red-500">reminder</span> for tasks
      </h1>
      <form action="" className='flex flex-col' onSubmit={handleSubmit(submitHandler)}>
        <input
          className="border-0 outline-0 border-b-2 border-black text-6xl"
          type="text"
          placeholder="Enter todo title..."
          {...register('title', { required: "title field can't be empty" })}
        />
        {/* Long way */}
        {/* {errors && errors.title && errors.title.message && (
          <small className='text-red-600 text-2xl'>{errors.title.message}</small>
        )} */}
        {/* Short way */}
        <small className="text-red-600 text-2xl">
          {errors?.title?.message}
        </small>
        <br />
        <br />
        <button className="text-6xl bg-green-700 w-fit hover:bg-green-800 rounded-xl border-0 outline-0 px-5 py-2.5 text-white font-600 cursor-pointer">
          Create Todo
        </button>
      </form>
    </div>
  );
};
export default Create;
