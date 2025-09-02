import { useState } from 'react';

const Create = (props) => {
  const [fullname, setfullname] = useState('');
  const [age, setAge] = useState(18);
  console.log(props);
  const submitHandler = (e) => {
    e.preventDefault();
    const newUser = { fullname, age };
    console.log(newUser);
  };
  return (
    <>
      <form action="" onSubmit={submitHandler}>
        <input
          type="text"
          placeholder="User name"
          onChange={(e) => setfullname(e.target.value)}
          value={fullname}
        />
        <input
          type="number"
          placeholder="User age"
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />
        <input type="submit" value="Submit" />
      </form>
    </>
  );
};

export default Create;
