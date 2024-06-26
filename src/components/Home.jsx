import React from 'react';
import './Home.css';
import profilePic from '../assets/profile.jpg';
import Skills from './Skills';
import Projects from './Projects';

function Home() {
    return (
        <div className="home">
            {/* BASIC INTRO */}
            <div className="introContainer">
                <div className="intro">
                    <h1>Hi , I'm <b style={{color : "brown"}}>Aditya Patil</b></h1>
                    <p><span style={{color : "brown"}}>Web Developer , Designer , Gamer</span> Please explore my profile</p>
                </div>
                <div className="profile-pic">
                    <img src={profilePic} alt="Aditya Patil" />
                    <a href="https://drive.google.com/drive/folders/1ndtWm6cJCRFKKts0VME0hPnlOPKk_MCP" target="_blank" rel="noopener noreferrer">
                        Check out My Profile 
                    </a>
                </div>
            </div>

            {/* ABOUT */}
            <div className="about">
                <h1>About Me</h1>
                <p>B.Tech in Information Technology from Vellore Institute of Technology. Passionate about software development and cloud technologies.</p>
                <div className="education">
                    <h1>Education</h1>
                    <p>Bachelor of Technology (B.Tech.) - Information Technology</p>
                    <p>Vellore Institute of Technology, Vellore (Sep 2021 - Jun 2025)</p>
                    <p>CGPA: 9.75</p>
                </div>
            </div>

            {/* Skills Component */}
            <Skills />
        </div>
    );
}

export default Home;
