import React from 'react';
import './AboutMe.css';
import profileImage from './config/works/pr6.jpg';
import p1 from './config/works/p1.jpg';
import p2 from './config/works/p2.jpg';
var images = [p1, p2, profileImage];

const AboutMe = () => {
    return (
        <div className="container">
            <div class="about-section">
                <h1 className='title'>About Me</h1>
                <p className=''>
                    I am a passionate and driven software engineer with a love for solving complex problems through code. With a strong foundation in computer science and a keen eye for detail, I thrive in the dynamic world of software development. My journey in this field has been characterized by a commitment to continuous learning and a desire to stay at the forefront of technology. Whether it's building web applications, crafting elegant algorithms, or optimizing databases, I enjoy every aspect of the software development process. I am dedicated to creating high-quality, efficient, and user-friendly solutions that make a positive impact. When I'm not coding, you can find me exploring new technologies, sharing knowledge with the developer community, or pursuing my other interests.
                </p>
                <p><button class="button"><a href="mailto:edaisyma@gmail.com">Contact</a></button></p>
            </div>

            <div class="row">
                {images.map((src, index) => (
                    <div class="column">
                        <div class="card">
                            <img
                                key={index}
                                class="profile-image"
                                src={src}
                                alt={`Image ${index + 1}`}
                            />
                        </div>
                    </div>
                ))}

            </div>
        </div>
    );
};

export default AboutMe;
