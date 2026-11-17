import React, { useRef } from 'react'
import { useEffect } from 'react'

const App_1 = () => {

 const ref = useRef();

 useEffect(() => {
ref.current.style.backgroundColor = "blue";
ref.current.style.color = "white";

 }, [])

 return (
  <div>
   <button ref={ref}>Click Me!</button>
  </div>
 )
}

export default App_1
