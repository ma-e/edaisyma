import React from 'react';
import './AboutMe.css';
import profileImage from './config/works/pr6.jpg';
import classroomlogo from './Classroom.png';
import maelogo from './mae.png';
import ImageContentRow from './ImageContentRow';
import catImg from "./config/works/cat1.gif";
import Footer from './Footer';
import Menu from './Menu';

const Classroom = () => {
    return (
        <>
            <div className="about-me-container">
                <Menu />

                <div className="header">

                <img
                        src={catImg}
                        alt="About Us"
                        style={{ width: '300px', height: 'auto' }}
                    />   
                </div>

                <div className="row">
                    <ImageContentRow
                        rowNumber={1}
                        image={classroomlogo}
                        content="Learning from anyone and anywhere."
                    />
                    <ImageContentRow
                        rowNumber={2}
                        image={maelogo}
                        content="Bridge the connection between the designer and the factory."
                    />
                </div>


            </div>
            <Footer />

        </>

    );
};

export default Classroom;
