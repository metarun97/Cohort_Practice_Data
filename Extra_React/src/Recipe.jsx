import { memo } from 'react';

const Recipe = () => {
  console.log('Hello from recipe component!');
  return <div>Recipe</div>;
};

export default memo(Recipe);
