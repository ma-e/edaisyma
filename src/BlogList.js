// BlogPage.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { loadBlogs, addBlog } from './blogStorage';
import Footer from './Footer';
import Menu from './Menu';
import './BlogList.css';
import { useAuth } from './AuthContext';

const BlogList = () => {
    const { isLoggedIn } = useAuth();
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [content, setContent] = useState('');
    const [version, setVersion] = useState(0);
    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isCancelled = false;
        setIsLoading(true);
        (async () => {
            const fetched = await loadBlogs();
            if (!isCancelled) {
                setBlogs(Array.isArray(fetched) ? fetched : []);
                setIsLoading(false);
            }
        })();
        return () => {
            isCancelled = true;
        };
    }, [version]);

    const handleCreate = async (e) => {
        e.preventDefault();
        if (!isLoggedIn) return;
        const created = await addBlog({ title, cover, content });
        if (!created) {
            alert('Failed to create post');
            return;
        }
        setTitle('');
        setCover('');
        setContent('');
        // Optimistically update UI
        setBlogs((prev) => [created, ...prev]);
        setVersion((v) => v + 1);
        alert(`Created post #${created.id}`);
    };

    return (
        <>

            <div className="about-me-container">

                <Menu />

                {isLoggedIn && (
                  <form onSubmit={handleCreate} className="create-post-form">
                    <h3>Create Post</h3>
                    <input
                      placeholder="Title"
                      value={title}
                      onChange={(e) => setTitle(e.target.value)}
                      required
                    />
                    <input
                      placeholder="Cover image URL (optional)"
                      value={cover}
                      onChange={(e) => setCover(e.target.value)}
                    />
                    <textarea
                      placeholder="Content"
                      value={content}
                      onChange={(e) => setContent(e.target.value)}
                      required
                    />
                    <button type="submit">Publish</button>
                  </form>
                )}

                {isLoading && <div className="blog-grid">Loading...</div>}
                {!isLoading && (
                <div className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <Link to={`/blog/${blog.id}`} className="blog-link">
                <img src={blog.cover} alt={blog.title} className="blog-image" />
                <p className="blog-title">{blog.title}</p>
                <p className="blog-date">{blog.date}</p>
              </Link>
            </div>
          ))}
        </div>
                )}
            </div>

            <Footer />

        </>


    );
};

export default BlogList;
