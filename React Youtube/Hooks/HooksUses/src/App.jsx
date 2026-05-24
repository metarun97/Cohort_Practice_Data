import React, { useState } from 'react';
// import UseMemo from './components/useMemo/UseMemo';
// import RecatUseEffect from './components/RecatUseEffect';
// import ReactUseEffect2 from './components/ReactUseEffect2';
// import UseEffectChellange from './components/UseEffectChellange';
// import CleanUp from './components/useEffect/CleanUp';
import ReactMemo from './components/ReactMemo/ReactMemo';
import UseCallback from './components/useCallback/UseCallback';

const App = () => {
  // const [show, setshow] = useState(false);
  return (
    <div>
      {/* <button onClick={() => setshow(!show)}>Toggle Show</button> */}
      {/* <RecatUseEffect /> */}
      {/* <ReactUseEffect2 /> */}
      {/* <UseEffectChellange /> */}
      {/* {show && <CleanUp />} */}
      {/* <ReactMemo /> */}
      {/* <UseMemo /> */}
      <UseCallback />
    </div>
  );
};

export default App;
