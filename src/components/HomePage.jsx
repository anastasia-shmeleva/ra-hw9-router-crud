import { useState, useEffect } from 'react';
import CreatePost from './CreatePost';
import Post from './Post';

export default function HomePage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    loadPosts()
  }, [])

  const loadPosts = () => {
    fetch('http://localhost:7777/posts')
    .then((response) => response.json())
    .then(data => setPosts(data));
  }

  return (
    <div className='container'>
      <CreatePost></CreatePost>
      {posts.length === 0 && <div className='text'>Nothing here yet</div>}
      {posts.length > 0 && <div className='posts'>{posts.map(post => <Post key={post.id}>{post}</Post>)}</div>}
    </div>  
  )
}