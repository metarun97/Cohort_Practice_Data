import { useState } from 'react';
import '../CSS/greetingMsg.css';

const Greetingmsg = () => {
  const [msg, setmsg] = useState('');

const greetFun = () => {
  setmsg("Welcome to our react Task section")
}



  return (
    <div className="main">
      <div className="greetSec">
        <h1 className='name'>Tarun⬇️</h1>
        <p className='msg'>{msg}</p>
        <button onClick={greetFun} className='greetMsg'>Greet Message</button>
      </div>
    </div>
  );
};

export default Greetingmsg;
