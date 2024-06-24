import React from 'react';
import './WorkPage.css'; // Ensure you have your CSS file imported
import Menu from "./Menu";
import Footer from "./Footer";
import tedxLogo from './tedx_logo.png';
import teslaLogo from "./tesla_logo.png";
import metlifeLogo from "./metlife_logo.png";

const WorkPage = () => {
    return (
        <div className="work-page">
                  <Menu />

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
                    <div className="work-details">
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
            <Footer />
        </div>
    );
};

export default WorkPage;
