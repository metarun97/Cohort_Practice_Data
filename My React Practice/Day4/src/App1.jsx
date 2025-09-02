import { useState } from 'react';
import Read1 from './components/Read1';
import Create1 from './components/Create1';

const App1 = () => {
  const [users, setusers] = useState([
    { name: 'tarun', age: 29 },
    { name: 'vikash', age: 26 },
    { name: 'govind', age: 23 },
  ]);

  return (
    <>
      <Create1 />
      <hr />
      <Read1 users={users} setusers={setusers} />
    </>
  );
};

export default App1;
