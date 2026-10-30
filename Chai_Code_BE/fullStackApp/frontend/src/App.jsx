import { useState, useEffect } from "react";
import axios from "axios";

function App() {

  const [jokes, setJokes] = useState([]);

  useEffect(() => {
    axios.get("/api/jokes")
      .then((response) => {
        // console.log(response);
        setJokes(response.data);
      })
  });

  return (
    <>
      <h1>Jokes: {jokes.length}</h1>
      {jokes.map((joke) => (
        <div key={joke.id}>
          <p>{joke.joke}</p>
        </div>
      ))}
    </>
  )
}

export default App
