import { useState } from 'react';
import './App.css'

function App() {

  const [count, setcount] = useState(0);

  /* INCREMET */
  const incValue = () => {
    if (count < 20) {
      setcount(count + 1);
    }
  }

  /* DECREMET */
  const decValue = () => {
    if (count > 0) {
      setcount(count - 1);
    }
  }

  return (
    <>
      <h1>Chai or couner</h1>
      <h2>Counter value: {count}</h2>
      <button onClick={incValue}>Increment</button>
      <br />
      <button onClick={decValue}>Decrement</button>
    </>
  )
}

export default App
