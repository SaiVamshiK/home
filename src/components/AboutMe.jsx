import React from 'react';
import Resume from '../assets/SaiVamshiResume.pdf';
import SelfImage from '../assets/SaiVamshi.jpg';

function AboutMe(){
    return (
        <div className="about" id="about">
            <h1 className="display-4 mb-0 pb-4">About Me</h1>
            <div>
                <div className="mx-auto mb-5">
                    <img src={SelfImage} alt="" className="border border-secondary rounded-circle" height="275" width="275"/>

                </div>
            </div>
            <p style={{fontSize: '20px'}}>
            My name is Sai Vamshi Kavali. I am a Computer Engineering graduate from Chaitanya Bharathi Institute of Technology. 
            I'm most passionate about giving back to the community, and my goal is to pursue this passion within the field of software engineering.
            I love problem solving programming and building full stack web applications.
            I have worked on various projects involving Python Django and Java.
            </p>
            <button className="btn">
                <a href={Resume} target="blank" style={{
            textDecoration: "none"
                }}>Resume</a>
            </button>
        </div>
    )
}

export default AboutMe;
