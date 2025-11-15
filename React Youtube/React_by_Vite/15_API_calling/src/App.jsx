import axios from 'axios';

const App = () => {
  async function getData() {
    const { data } = await axios.get(
      'https://jsonplaceholder.typicode.com/todos/'
    );
    console.log(data);
  }
  return (
    <div>
      <button onClick={getData}>GetData</button>
    </div>
  );
};

export default App;
