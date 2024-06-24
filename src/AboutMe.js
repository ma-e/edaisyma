import React from 'react';
import './AboutMe.css';
import profileImage from './config/works/pr6.jpg';
import p1 from './config/works/p1.jpg';
import p2 from './config/works/p2.jpg';
var images = [p1, p2, profileImage];
import Footer from './Footer';

const AboutMe = () => {
    return (
        <div className="container display-3">
            {/* <div className="about-section"> */}
                <div className="header">
                    <p>"I'm E Ma, a seasoned software engineer specializing in developing robust and scalable solutions that enhance user experiences and drive business growth. With a solid foundation in computer science and hands-on experience in both startup and corporate settings, I bring a blend of technical expertise and innovation to every project."</p>
                </div>
                <a href="mailto:edaisyma@gmail.com"><p className="button">LET'S TALK</p></a>
            {/* </div> */}

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
