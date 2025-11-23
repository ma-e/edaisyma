import React, { useState, useEffect } from 'react';
import { useAdmin } from '../../context/AdminContext';
import styles from './Blog.module.css';

interface Product {
  id: number;
  title: string;
  description: string;
  images: string[];
}

const Blog: React.FC = () => {
  const { isAdmin } = useAdmin();
  const [posts, setPosts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products?limit=6');
        const data = await res.json();
        setPosts(data.products);
      } catch (error) {
        console.error('Failed to fetch posts', error);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className={styles.blogPage}>
      {/* <h1></h1> */}

      {isAdmin && (
        <p className={styles.adminNotice}>Admin can manage posts locally</p>
      )}

      <div className={styles.postsGrid}>
        {posts.map((post) => (
          <div key={post.id} className={styles.card}>
            <img
              src={post.images[0]}
              alt={post.title}
              className={styles.cardImage}
            />
            <h2 className={styles.cardTitle}>{post.title}</h2>
            <p className={styles.cardDescription}>{post.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Blog;
