import React, { useEffect, useState } from 'react';

const CleanUp = () => {
  const [count, setCount] = useState(0);
  const [startclicks, setStartclicks] = useState(0);

  /* Hnadle timer function */
  const handleTimer = () => {
    setStartclicks((prevClick) => prevClick + 1);
  };

  /* useEffect hook */
  useEffect(() => {
    if (startclicks > 0) {
      console.log('NEW INTERVAL: Effect starting new conter started');

      const intrvlId = setInterval(() => {
        setCount((prevCount) => prevCount + 1);
      }, 1000);
      // No cleanup here
      return () => {
        if (intrvlId) {
          console.log('CLEAN UP: leanup intrvlId.');
          clearInterval(intrvlId);
        }
      };
    }
  }, [startclicks]);

  return (
    <div>
      <h1 className="ml-5 text-4xl fon">{count}</h1>
      <button
        className="px-5 py-2 rounded bg-green-400 text-white cursor-pointer"
        onClick={handleTimer}
      >
        Count
      </button>
    </div>
  );
};

export default CleanUp;
