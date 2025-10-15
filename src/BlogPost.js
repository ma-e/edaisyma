import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadBlogById } from './blogStorage';
import "./Blog.css"
import Footer from './Footer';

const BlogPost = () => {
    const { id } = useParams(); // Use the useParams hook to get the 'id' parameter

    useEffect(() => {
        let isCancelled = false;
        setIsLoading(true);
        (async () => {
            const fetched = await loadBlogById(id);
            if (!isCancelled) {
                setBlog(fetched);
                setIsLoading(false);
            }
        })();
        return () => {
            isCancelled = true;
        };
    }, [id]);

    if (isLoading) {
        return <div className="container blog-container">Loading...</div>;
    }
    if (!blog) {
        return <div className="container blog-container">Blog not found.</div>;
    }

    return (
        <>
            <div className="container">
                <div className="about-section">
                    <div className="header">
                        <h1>MAE</h1>
                        <p>COMING SOON.</p>
                    </div>
                </div>
                <h1 className="blog-detail-title">{blog.title}</h1>
                <p className="blog-content">{blog.content}</p>
            </div>
        </>
    );
};

export default BlogPost;
