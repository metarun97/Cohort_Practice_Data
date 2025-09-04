import { useState } from 'react';
import Create from './components/Create';
import Read from './components/Read';

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: 'I am default Todo', isCompleted: false },
  ]);

  // console.log(renderTodos);

  return (
    <>
      <Create todos={todos} settodos={settodos} />
      <hr />
      <Read todos={todos} settodos={settodos} />
    </>
  );
};

export default App;
