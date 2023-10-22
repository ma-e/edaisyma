import React from 'react';
import './AboutMe.css';
import profileImage from './config/works/pr6.jpg';

const AboutMe = () => {
    return (
        <div className="container">
            <div className="content">
                <h1></h1>
                <div className="image-container">
                    <img src={profileImage} alt="Profile" className="profile-image" />
                </div>
                <p className='paragraph'>
                    I am a passionate and driven software engineer with a love for solving complex problems through code. With a strong foundation in computer science and a keen eye for detail, I thrive in the dynamic world of software development. My journey in this field has been characterized by a commitment to continuous learning and a desire to stay at the forefront of technology. Whether it's building web applications, crafting elegant algorithms, or optimizing databases, I enjoy every aspect of the software development process. I am dedicated to creating high-quality, efficient, and user-friendly solutions that make a positive impact. When I'm not coding, you can find me exploring new technologies, sharing knowledge with the developer community, or pursuing my other interests.
                </p>
                {/* Add more content here */}
            </div>
        </div>
    );
};

export default AboutMe;
