import { useState } from "react"

const App = () => {
  const [num, setnum] = useState(0)


  const handleClick = () => {
    setnum(prev => prev + 1)
    setnum(prev => prev + 1)
    setnum(prev => prev + 1)
  }


  return (
    <div>
      <h1>{num}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  )
}

export default App
