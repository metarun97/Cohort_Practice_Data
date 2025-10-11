import './MoodSongs.css';
import { useState, useRef } from 'react';
import { CgPlayPauseO } from 'react-icons/cg';
import { CgPlayButtonO } from 'react-icons/cg';

const MoodSongs = ({ songs }) => {
  const [Isplaying, setIsplaying] = useState(null);
  const audioRefs = useRef([]);

  const handlePlayPause = (index) => {
    const currentAudio = audioRefs.current[index];

    if (Isplaying === index) {
      currentAudio.pause();
      setIsplaying(null);
    } else {
      audioRefs.current.forEach((audio, i) => {
        if (audio && i !== index) audio.pause();
      });
      currentAudio.play();
      setIsplaying(index);
    }
  };

  return (
    <div className="song-container">
      <h2>🎵Recomended Songs🎵</h2>
      <div className="song-lists">
        {songs.map((song, index) => (
          <div className="song-list" key={index}>
            <div className="song-title">
              <h3>{song.title}</h3>
              <h4>{song.artist}</h4>
            </div>
            <div className="song-title-sec">
              <audio
                src={song.audio}
                ref={(el) => (audioRefs.current[index] = el)}
                controls
              />
              <button onClick={() => handlePlayPause(index)}>
                {Isplaying === index ? (
                  <CgPlayPauseO className="pause" />
                ) : (
                  <CgPlayButtonO className="play" />
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default MoodSongs;
