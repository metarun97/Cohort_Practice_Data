import { useContext, useState } from "react";
import UserContext from "../context/userContext";

const Login = () => {

  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { setUser } = useContext(UserContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    setUser({ username, password });
  }

  return (
    <div>
      <input onChange={(e) => setUsername(e.target.value)} type="text" placeholder="username" />
      <input onChange={(e) => setPassword(e.target.value)} type="password" placeholder="password" />
      <button onClick={handleSubmit}>Submit</button>
    </div>
  )
}

export default Login
