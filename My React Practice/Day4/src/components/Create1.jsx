import { useState } from "react";

const Create1 = () => {
  const [name, setname] = useState('');
  const [age, setAge] = useState(18);

  const handleNameChange = (e) => {
    setname(e.target.value);
  };

  const handleAgeChange = (e) => {
    setAge(e.target.value);
  };

  return (
    <>
      <form action="">
        <input
          type="text"
          placeholder="Enter fullname"
          onChange={handleNameChange}
          value={name}
        />
        <input
          type="number"
          placeholder="Enter age"
          onChange={handleAgeChange}
          value={age}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Create1;
