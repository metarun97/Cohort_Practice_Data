import { useState } from 'react';

const App = () => {
  const [todos, settodos] = useState([
    { id: 1, title: 'Todo 1', isCompleted: false },
  ]);

  const [title, settitle] = useState('');
  // const [completed, setcompleted] = useState(false);
  // const [gender, setgender] = useState('male');
  const [city, setcity] = useState('kolkata');
  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="Enter title..."
          onChange={(e) => settitle(e.target.value)}
          value={title}
        />
        {/* <br />
        <input
          type="checkbox"
          onChange={(e) => setcompleted(e.target.checked)}
          checked={completed}
        />
        Completed <br />
        <input
          type="radio"
          value="male"
          onChange={(e) => setgender(e.target.value)}
          checked={gender == 'male' ? true : false}
        />
        Male
        <input
          type="radio"
          value="female"
          onChange={(e) => setgender(e.target.value)}
          checked={gender == 'female' ? true : false}
        />
        Female */}
        <br />
        <label htmlFor="">Select a city</label>
        <select value={city} onChange={(e) => setcity(e.target.value)}>
          <option value="mumbai">Mumbai</option>
          <option value="delhi">Delhi</option>
          <option value="kolkata">Kolkata</option>
        </select>
        <br />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default App;
