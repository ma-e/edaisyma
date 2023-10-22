// BlogPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import blogs from './Blogs';

const BlogPage = () => {
    return (
        <div className='container'>
            <h1 className="blog-title">My Blog</h1>
            <ul className="blog-list">
                {blogs.map((blog) => (
                    <li className="blog-list-item" key={blog.id}>
                        <Link to={`/blog/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default BlogPage;
