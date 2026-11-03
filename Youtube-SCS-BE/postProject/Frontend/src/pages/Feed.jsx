import { useEffect, useState } from 'react';
import '../styles/feed.css';
import axios from 'axios';


const Feed = () => {
 const [posts, setPosts] = useState([]);

 useEffect(() => {
  axios.get("http://localhost:3000/posts")
   .then(response => setPosts(response.data.posts));
 }, []);


 return (
  <div className="post-feed">
   {posts.map((post) => (
    <div key={post._id} className='post-card'>
     <div className="post-image">
      <img src={post.image} alt="Post" />
     </div>
     <div className="post-content">
      <p>{post.caption}</p>
     </div>
    </div>
   ))}
  </div>
 )
}

export default Feed;
