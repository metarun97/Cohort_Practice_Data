import React, { useState } from 'react';
// import RecatUseEffect from './components/RecatUseEffect';
// import ReactUseEffect2 from './components/ReactUseEffect2';
// import UseEffectChellange from './components/UseEffectChellange';
import CleanUp from './components/CleanUp';
import ReactMemo from './components/ReactMemo';

const App = () => {
  // const [show, setshow] = useState(false);
  return (
    <div>
      {/* <button onClick={() => setshow(!show)}>Toggle Show</button> */}
      {/* <RecatUseEffect /> */}
      {/* <ReactUseEffect2 /> */}
      {/* <UseEffectChellange /> */}
      {/* {show && <CleanUp />} */}
      <ReactMemo />
    </div>
  );
};

export default App;
