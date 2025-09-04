import { useState } from 'react';
import { nanoid } from 'nanoid';

const Create = (props) => {
  const [title, settitle] = useState('');
  const todos = props.todos;
  const settodos = props.settodos;

  // ^ Submit Handler:-
  const submitHandler = (e) => {
    e.preventDefault();
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
    settitle('');
  };
  return (
    <div>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="Enter title..."
          onChange={(e) => settitle(e.target.value)}
          value={title}
        />
        <br />
        <br />
        <button>Create Todo</button>
      </form>
    </div>
  );
};

export default Create;
