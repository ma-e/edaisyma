import React from 'react';
import './AboutMe.css';
import profileImage from './config/works/pr6.jpg';
import p1 from './config/works/p1.jpg';
import p2 from './config/works/p2.jpg';
var images = [p1, p2, profileImage];
import Footer from './Footer';

const AboutMe = () => {
    return (
        <div className="container">
            <div className="about-section">
                <div className="header">
                    <h1>MÆ</h1>
                    <p>"I AM A SOFTWARE ENGINEER BASED IN FREMONT, CALIFORNIA."</p>
                </div>
                <a href="mailto:edaisyma@gmail.com"><p className="button">Contact</p></a>
            </div>

            <div className="row">
                {images.map((src, index) => (
                    <div className="column">
                        <div className="card">
                            <img
                                key={index}
                                className="profile-image"
                                src={src}
                                alt={`Image ${index + 1}`}
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div >
    );
};

export default AboutMe;
