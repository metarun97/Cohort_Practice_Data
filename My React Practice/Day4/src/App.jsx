import { useState } from 'react';
import Create from './components/Create';
import Read from './components/Read';

const App = () => {
  const [users, setusers] = useState([
    { name: 'Tarun', age: 29 },
    { name: 'Vikash', age: 26 },
    { name: 'Govind', age: 23 },
  ]);
  return (
    <>
      {/*Two-way-binding concept in React */}
      <Create />
      <hr />
      <Read users={users} setusers={setusers} />
    </>
  );
};

export default App;
