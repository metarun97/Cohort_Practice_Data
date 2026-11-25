import { useState } from 'react';
import './App.css'


const App = () => {

  const [form, setForm] = useState({});

  const handleClick = () => {
    console.log("Button clicked!");
  }

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    console.log(form)
  }


  return (
    <>
      <button onClick={handleClick}>Click me</button>
      <input onChange={handleChange} type="text" name="name" value={form.name ? form.name : ""} />
      <input onChange={handleChange} type="email" name="email" value={form.email ? form.email : ""} />
    </>
  )
}

export default App;
