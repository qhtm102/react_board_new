import React, { useState } from 'react';
import Header from './components/Header';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import './App.css';

function App() {
  const [posts, setPosts] = useState([]);

  const addPost = (post) => {
    setPosts([post, ...posts]);
  };

  return (
    <div className="App">
      <Header />
      <PostForm addPost={addPost} />
      <PostList posts={posts} />
    </div>
  );
}

export default App;
