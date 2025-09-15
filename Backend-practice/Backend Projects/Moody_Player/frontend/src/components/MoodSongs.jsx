import { useState } from 'react';
import { FaCirclePlay } from 'react-icons/fa6';
import { FaPauseCircle } from 'react-icons/fa';
import "./MoodSongs.css";

const MoodSongs = () => {
  const [songs, setsongs] = useState([
    {
      title: 'test_title',
      artist: 'test_artist',
      url: 'test_url',
    },
    {
      title: 'test_title',
      artist: 'test_artist',
      url: 'test_url',
    },
    {
      title: 'test_title',
      artist: 'test_artist',
      url: 'test_url',
    },
  ]);
  return (
    <div className='song-container'>
      <h2>🎵Recomended Songs🎵</h2>
      <div className='song-lists'>
        {songs.map((song, index) => {
          return (
            <div className='song-list' key={index}>
              <div className="song-title">
                <h3>{song.title}</h3>
                <h4>{song.artist}</h4>
              </div>
              <div className="song-play-pause-btn">
                <FaPauseCircle className='pause' />
                <FaCirclePlay className='play'/>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default MoodSongs;
