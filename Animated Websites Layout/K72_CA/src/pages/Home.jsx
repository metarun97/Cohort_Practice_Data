import Homebottontext from '../components/Home/Homebottontext';
import Homeherotext from '../components/Home/Homeherotext';
import Video from '../components/Home/Video';

const Home = () => {
  return (
    <div>
      <div className="w-screen h-screen fixed">
        <Video />
      </div>
      <div className="w-screen h-screen relative flex flex-col justify-between">
        <Homeherotext />
        <Homebottontext />
      </div>
    </div>
  );
};

export default Home;
