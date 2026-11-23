import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {

  const handleClick = () => {
    console.log("Button clicked!")

  }
  const handleMouseOver = () => {
    console.log("Mouse overed!")
  }

  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <div onMouseOver={handleMouseOver} className='red'>
        I am a red div
      </div>
    </>
  )
}

export default App
