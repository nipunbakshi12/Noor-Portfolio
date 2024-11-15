import React from 'react';
import '../styles/About.css';
import image from '../assets/about.jpeg'

const About = () => {
    return (
        <div className="about-container">
            <div className="content-section">
                <p className="about-text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Vivamus lacinia odio vitae vestibulum vestibulum.
                    Cras venenatis euismod malesuada. Nullam ac sapien est.
                    Praesent finibus velit ut lectus volutpat, in cursus nunc
                    hendrerit. Quisque efficitur consequat felis, non malesuada
                    turpis placerat in.
                </p>
            </div>

            <div className="about-photo-section">
                <div className="about-photo-frame">
                    <img src={image} alt="Profile" className="about-photo" />
                </div>
            </div>
        </div>
    );
};

export default About;