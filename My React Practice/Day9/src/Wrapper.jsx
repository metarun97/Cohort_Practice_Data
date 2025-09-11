import { createContext, useState } from 'react';

export const todocontext = createContext(null);

const Wrapper = (props) => {
  const [todos, settodos] = useState([
    { id: 1, title: 'I am default Todo', isCompleted: false },
  ]);

  // console.log(props);
  return (
    <todocontext.Provider value={[todos, settodos]}>
      {props.children}
    </todocontext.Provider>
  );
};

export default Wrapper;
