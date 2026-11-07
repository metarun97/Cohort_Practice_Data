import React, { useEffect, useState } from 'react'
import Navbar from './components/Navbar';

const App = () => {

  const [count, setCount] = useState(0);
  const [color, setColor] = useState(0);



  //* Ye pehle mount pe to chalega hi or fir count state me change pe chale bs.
  useEffect(() => {
    alert("count was changed");
    setColor(color + 1);
  }, [count])



  return (
    <div>
      {/* <Navbar color={"navy " + "blue" + color} /> */}
      <p>{count}</p>
      <button onClick={() => setCount(count + 1)}>Click Me</button>
    </div>

  )
}

export default App
