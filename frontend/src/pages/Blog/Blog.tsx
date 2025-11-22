import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../context/AdminContext';
import styles from './Blog.module.css';

interface Post {
  id: number;
  title: string;
  content: string;
}

const Blog: React.FC = () => {
  const { isAdmin } = useAdmin();
  const [posts, setPosts] = useState<Post[]>([]);
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  useEffect(() => {
    const savedPosts = localStorage.getItem('posts');
    if (savedPosts) setPosts(JSON.parse(savedPosts));
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !content) return;

    const newPost = { id: Date.now(), title, content };
    const updatedPosts = [...posts, newPost];
    setPosts(updatedPosts);
    localStorage.setItem('posts', JSON.stringify(updatedPosts));
    setTitle('');
    setContent('');
  };

  return (
    <div className={styles.blogPage}>
      <h1>Blog</h1>

      {isAdmin && (
        <form onSubmit={handleSubmit} className={styles.blogForm}>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className={styles.input}
          />
          <textarea
            placeholder="Content"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className={styles.textarea}
          />
          <button type="submit" className={styles.button}>
            Add Post
          </button>
        </form>
      )}

      <div className={styles.posts}>
        {posts.map((post) => (
          <div key={post.id} className={styles.post}>
            <h2>{post.title}</h2>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
