import { motion } from 'motion/react';

const App = () => {
  return (
    <div>
      <motion.div
        animate={{
          x: 1000,
          rotate:360
        }}
        transition={{
          delay: 2,
          duration: 3,
          repeat:Infinity,
          ease:"anticipate"
        }}
        className="box"
      ></motion.div>
    </div>
  );
};

export default App;
