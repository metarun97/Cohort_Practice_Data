import React, { useEffect, useState } from 'react'
import Card from './components/Card'

const App = () => {

  const [Datas, setDatas] = useState([]);


  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts")
      .then(res => res.json())
      // .then(data => console.log(data))
      .then(data => setDatas(data))
  }, [])

  return (
    <div>
      {Datas.map(Data => {
        return <Card key={Data.id} Data={Data} />
      })}
    </div>
  )
}

export default App
