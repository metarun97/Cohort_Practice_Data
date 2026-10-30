import { useState } from 'react'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  // const myDetails = {
  //   name: "Tarun",
  //   age: 31,
  //   city: "Bulandshahr"
  // }

  const arrNum = [1, 2, 3];

  return (
    <>
      <h1 className='bg-green-500 text-black mb-4'>Hello Tailwind</h1>
      {/* <Card name="tarun" details={myDetails} array={arrNum} /> */}
      <Card name="Tarun" btntext="click me" />
      <Card name="Kapil" />
    </>
  )
}

export default App
