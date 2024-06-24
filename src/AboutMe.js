import React, { useState, useEffect } from 'react';
import './AboutMe.css';
import profileImage from './config/works/pr6.jpg';
import p1 from './config/works/p1.jpg';
import p2 from './config/works/p2.jpg';
import painting from './config/products/2.PNG';
import painting1 from './config/products/1.PNG';
import painting2 from './config/products/babyBird.jpg';
import Menu from './Menu';
import Footer from './Footer';
import tedxLogo from './tedx_logo.png';
import teslaLogo from "./tesla_logo.png";
import metlifeLogo from "./metlife_logo.png";
import profileImg from "./config/works/profile.png";
import Snowfall from './Snowfall';
import CuteCursor from './CuteCursor';


const images = [profileImage, p1, p2, painting, painting1, painting2];

const AboutMe = () => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex((prevIndex) =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 300); // Change image every 3 seconds

        return () => clearInterval(intervalId);
    }, []);

    return (
        <>
           {/* <div> */}
      <Snowfall count={50} /> {/* Adjust count for more or fewer snowflakes */}
      {/* <CuteCursor /> */}

      {/* Your main content goes here */}
    {/* </div> */}
        <div className="about-me-container">
            <Menu />
            <div className="about-page">
                <img src={profileImg} alt="About Us" className="about-image" />
                {/* <div className="about-text">
                    <div className="header">
                    <h1 style={{ fontSize: '24px', color: 'orange' }}>HEY THERE, I'M E MA!</h1>
                        <h2 style={{ fontSize: '36px', color: "#F37021" }}>A software engineer and tech enthusiast.</h2>
                        <p>
                        I'm a Software Engineer at Tesla from Orlando, Florida, passionate about developing innovative software solutions and leveraging technology to drive impactful change in my community and beyond.                        </p>
                    </div>

                </div> */}

                <div style={{ fontFamily: 'Arial, sans-serif', textAlign: 'center', backgroundColor: '#f0f0f0', padding: '20px', borderRadius: '8px', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <h1 style={{ fontSize: '32px', color: "#F37021" }}>Hi there, I'm a Software Engineer!</h1>
      <p style={{ fontSize: '18px', lineHeight: '1.6', color: '#666' }}>
        Based in Orlando, Florida, I'm passionate about developing innovative software solutions and leveraging technology to drive impactful change in my community and beyond.
      </p>
    </div>
            </div>
            {/* <div className="">

                <div className="image-container">
                    <div className="card">
                        <img
                            className="image-slide"
                            src={images[currentImageIndex]}
                            alt={`Image ${currentImageIndex + 1}`}
                        />
                    </div>
                </div>


            </div> */}

            <div className="work-experience">
                <div className="work-item">
                    <img src={tedxLogo} alt="TEDx Mission San Jose High School Youth Logo" className="company-logo" />
                    <div className="work-details">
                        <h3>Co Organizer</h3>
                        <p>TEDx Mission San Jose High School Youth · Full-time</p>
                        <p>Jun 2024 - Present · 1 mo</p>
                        <p>Fremont, California, United States · On-site</p>
                    </div>
                </div>

                <div className="work-item">
                    <img src={teslaLogo} alt="Tesla Logo" className="company-logo" />
                    <div class="work-details">
                        <h3>Software Engineer</h3>
                        <p>Tesla · Full-time</p>
                        <p>Dec 2022 - Present · 1 yr 7 mos</p>
                        <p>Fremont, California, United States</p>
                    </div>
                </div>

                <div className="work-item">
                    <img src={metlifeLogo} alt="MetLife Logo" className="company-logo" />
                    <div className="work-details">
                        <h3>Software Engineer</h3>
                        <p>MetLife · Full-time</p>
                        <p>May 2022 - Dec 2022 · 8 mos</p>
                        <p>Fremont, California, United States</p>
                    </div>
                </div>
            </div>

        </div>

<div className="footer">

<a href="mailto:edaisyma@gmail.com" className="button">Say Hello!</a>
<p>&copy; {new Date().getFullYear()} MAE. ALL RIGHTS RESERVED.</p>
<Footer />

</div>
</>
    );
};

export default AboutMe;
