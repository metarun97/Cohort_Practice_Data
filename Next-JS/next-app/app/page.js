"use client"
import React, { useState } from 'react';

const page = () => {

  const [num, setNum] = useState(0);

  return (
    <div>
      <h1>Change num value {num}</h1>
      <button className="bg-blue-500 rounded px-5 py-2 cursor-pointer text-white" onClick={() => setNum(num + 1)}>Increment</button>
    </div>
  )
}

export default page
