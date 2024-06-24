import React from 'react';
import './AboutMe.css';
import profileImage from './config/works/pr6.jpg';
import classroomlogo from './Classroom.png';
import maelogo from './mae.png';
import ImageContentRow from './ImageContentRow';

const Classroom = () => {
    return (
        <div class="container">
            <div className="about-section">
                <div className="header">
                    <h1>MAE</h1>
                    <p>PROJECTS</p>
                </div>

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
    );
};

export default Classroom;
