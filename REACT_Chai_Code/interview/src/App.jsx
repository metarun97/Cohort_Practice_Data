import { useState } from 'react'

const App = () => {

  const [count, setcount] = useState(0)

  const incVal = () => {
    setcount(prev => prev + 1)
    setcount(prev => prev + 1)
    setcount(prev => prev + 1)
  }

  const decVal = () => {
    setcount(prev => prev - 1)
  }

  return (
    <>
      <h1>Basic counter (Diffing Algorythem)</h1>
      <h2>Main count:{count}</h2>


      <button onClick={incVal}>INC</button>
      <button onClick={decVal}>DEC</button>

      <span style={{ display: "block" }}>Span's Count:{count}</span >
      <p>Para's Count:{count}</p>
    </>
  )
}

export default App
