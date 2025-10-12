import React from 'react';
import { useParams } from 'react-router-dom';
import { loadBlogs } from './blogStorage';
import "./Blog.css"
import Footer from './Footer';
import Menu from './Menu';

const BlogDetail = () => {
    const { id } = useParams(); // Use the useParams hook to get the 'id' parameter

    const blog = loadBlogs().find((blog) => blog.id.toString() === id);

    if (!blog) {
        return <div className="container blog-container">Blog not found.</div>;
    }

    return (
        <>
            <div className="about-me-container">
            <Menu />

                <div className="about-section">
                    <div className="header">
                        <h1>MAE</h1>
                        <p>COMING SOON.</p>
                    </div>
                </div>
                <h1 className="blog-detail-title">{blog.title}</h1>
                <p className="blog-content">{blog.content}</p>
            </div>

            <Footer />

        </>
    );
};

export default BlogDetail;
