import FacialExpression from './components/FacialExpression';
import MoodSongs from './components/MoodSongs';
import './index.css';

const App = () => {
  return (
    <div className='app-sec'>
      <FacialExpression />
      <MoodSongs/>
    </div>
  );
};

export default App;
