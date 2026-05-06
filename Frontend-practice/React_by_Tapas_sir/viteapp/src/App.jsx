import React from 'react';
import MovieComponent from './MovieComponent';
import Colorizer from './Colorizer';
import Counter from './Counter';
import Greeting from './Greeting';

const App = () => {
  return (
    <div>
      {/* <MovieComponent /> */}
      {/* <Colorizer/> */}
      {/* <Counter/> */}
      <Greeting randomMax={8} />
    </div>
  );
};

export default App;
