import { useState } from 'react';
import '../CSS/likeBtn.css';

const LikeBtn = () => {
  const [like, setlike] = useState(0);

  const likeFunc = () => {
    if (like >= 0) setlike(like + 1);
  };

  return (
    <div className="main">
      <div className="likeSec">
        <h2>Likes : {like}</h2>
        <button onClick={likeFunc} className="likeBtn">
          ❤️
        </button>
      </div>
    </div>
  );
};

export default LikeBtn;
