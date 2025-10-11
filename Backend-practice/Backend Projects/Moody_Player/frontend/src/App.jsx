import { useState } from 'react';
import FacialExpression from './components/FacialExpression';
import MoodSongs from './components/MoodSongs';
import './index.css';

const App = () => {
  const [songs, setSongs] = useState([]);
  return (
    <div className="app-sec">
      <FacialExpression setSongs={setSongs} />
      <MoodSongs songs={songs} />
    </div>
  );
};

export default App;
