import { useState } from 'react';
import Create from './components/Create';
import Read from './components/Read';


const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: 'I am default Todo', isCompleted: false },
  ]);

  // console.log(renderTodos);

  return (
    <div className='w-full h-screen bg-slate-300 flex p-10 gap-3 mx-auto'>
      <Create todos={todos} settodos={settodos} />
      <hr />
      <Read todos={todos} settodos={settodos} />
    </div>
  );
};

export default App;
