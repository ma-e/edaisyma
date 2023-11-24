import React from 'react';
import { useParams } from 'react-router-dom';
import blogs from './Blogs';
import "./Blog.css"
import Footer from './Footer';

const BlogPost = () => {
    const { id } = useParams(); // Use the useParams hook to get the 'id' parameter

    // Assuming 'blogs' is an array of blog posts
    const blog = blogs.find((blog) => blog.id.toString() === id);

    if (!blog) {
        return <div className="container blog-container">Blog not found.</div>;
    }

    return (
        <>
            <div className="container">
                <div className="about-section">
                    <div className="header">
                        <h1>M.</h1>
                        <p>"COMING SOON."</p>
                    </div>
                </div>
                <h1 className="blog-detail-title">{blog.title}</h1>
                <p className="blog-content">{blog.content}</p>
            </div>
            {/* <Footer /> */}
        </>
    );
};

export default BlogPost;
