import React, { useEffect, useState } from 'react';

const CleanUp = () => {
  const [count, setcount] = useState(0);
  // const [width, setWidth] = useState(window.screen.height);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     setcount((prev) => prev + 1);
  //     console.log('Running');
  //   }, 1000);

  //   return () => {
  //     clearInterval(timer); // cleanup function to prevent memory leak
  //     console.log('Stop');
  //   };
  // }, []);

  // useEffect(() => {
  //   const timer = setInterval(() => {
  //     console.log('Running now');
  //   }, 1000);

  //   return ()=>{
  //     clearInterval(timer)
  //     console.log('Stopped now');
  //   }
  // }, []);

  // const changeWidth = () => {
  //   setWidth(window.innerWidth);
  // };

  // useEffect(() => {
  //   window.addEventListener('resize', changeWidth);
  //   return ()=>{
  //     window.removeEventListener('resize', changeWidth);
  //   }
  // });

  /* Note => Agar hum clear nahi krenge interval ko to backward me running rahgea or memory leak krega. */
  return (
    <div>
      {/* <h1>{width}</h1> */}
      <h1>{count}</h1>
    </div>
  );
};

export default CleanUp;
