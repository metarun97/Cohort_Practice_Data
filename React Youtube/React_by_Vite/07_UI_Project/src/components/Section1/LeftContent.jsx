import Arrow from './Arrow';
import HeroText from './HeroText';

const LeftContent = () => {
  return (
    <div className="w-1/3 flex flex-col  justify-between">
      <HeroText />
      <Arrow />
    </div>
  );
};

export default LeftContent;
