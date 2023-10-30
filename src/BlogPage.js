// BlogPage.js
import React from 'react';
import { Link } from 'react-router-dom';
import blogs from './Blogs';
import "./Blog.css"
import Footer from './Footer';
import profileImage from './config/works/pr6.jpg';
import p1 from './config/works/p1.jpg';
import p2 from './config/works/p2.jpg';
var images = [p1, p2];

const BlogPage = () => {
    return (
        <>
            <div className='container'>
                <div className="header">
                    <h1>M.</h1>
                    <p>"A PERSONAL BLOG."</p>
                </div>

                <ul className="blog-list">
                    {blogs.map((blog, index) => {
                        const isOdd = index % 2 === 1; // Check if the index is odd
                        return (
                            <li className="blog-list-item" key={blog.id}>
                                <div className="blog-row">
                                    {isOdd ? null : ( // Display image on the left for odd indexes
                                        <div className="blog-column">
                                            <div className="blog-card">
                                                <img
                                                    className="blog-profile-image"
                                                    src={blog.cover}
                                                    alt={blog.title}
                                                />
                                            </div>
                                        </div>
                                    )}
                                    <div className="blog-column">
                                        <div className="blog-card">
                                            <Link to={`/blog/${blog.id}`}>
                                                <p className="blog-title">{blog.title}</p>
                                            </Link>
                                            <Link to={`/blog/${blog.id}`}>
                                                <p>LEARN MORE</p>
                                            </Link>
                                        </div>
                                    </div>
                                    {isOdd ? ( // Display image on the right for even indexes
                                        <div className="blog-column">
                                            <div className="blog-card">
                                                <img
                                                    className="blog-profile-image"
                                                    src={blog.cover}
                                                    alt={blog.title}
                                                />
                                            </div>
                                        </div>
                                    ) : null}
                                </div>
                            </li>
                        );
                    })}
                </ul>
                <Footer />
            </div>
        </>
    );
};

export default BlogPage;
