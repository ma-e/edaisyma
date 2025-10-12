// BlogPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import blogs from './Blogs';
import Footer from './Footer';
import Menu from './Menu';
import './BlogList.css';

const BlogList = () => {
    return (
        <>

            <div className="about-me-container">

                <Menu />

                <div className="blog-grid">
          {blogs.map((blog) => (
            <div key={blog.id} className="blog-card">
              <Link to={`/blog/${blog.id}`} className="blog-link">
                <img src={blog.cover} alt={blog.title} className="blog-image" />
                {/* <p className="blog-title">{blog.title}</p> */}
                <p className="blog-date">{blog.date}</p>
              </Link>
            </div>
          ))}
        </div>
            </div>

            <Footer />

        </>


    );
};

export default BlogList;
