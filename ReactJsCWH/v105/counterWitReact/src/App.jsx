import { useState } from 'react'
import Navbar from './components/Navbar';

const App = () => {

  const [value, setValue] = useState(0);

  return (
    <div>
      <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click Me</button>
      <Navbar channel="CWH" />
    </div>

  )
}

export default App
