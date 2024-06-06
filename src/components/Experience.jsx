import React from 'react';
import './Experience.css';

// Experience Card component
import ExperienceCard from './ExperienceCard';

// images export
import webIntern from "../assets/webDevIntern.jpg"
import promptIntern from "../assets/promptEngiIntern.jpg"

const b2Points = ["Developed the company website using both front-end and back-end." , "Cross-platform optimization making it 100% mobile and tablet friendly." , "Optimization of the website and increased responsiveness by 20-25%." , "Implemented authentication and member login, increasing the user base by 30%."];

const promptPoints = ["Trained chat-based AI by providing accurate prompts retaining 60-70% accuracy."]

function Experience() {
    return (
        <div className="experience">
            <h1>Experience</h1>
            {/* Manually entering data -- 📁 For proper data entry check Projects component */}
            <ExperienceCard experienceTitle="Full-Stack Dev Intern" company="B2World" duration="Nov-Dec 2023" points={b2Points} imgSrc={webIntern} key="1"/>
            <ExperienceCard experienceTitle="Prompt Engineer Intern" company="SoulAI/Deccan AI" duration="Oct-Dec 2023" points={promptPoints} imgSrc={promptIntern} key="2"/>
            
            <h1>Certifications</h1>
            <ul className="certAchList">
                <li>AWS Certified Cloud Practitioner</li>
                <li>AWS Certified Solutions Architect Associate</li>
                <li>Introduction to Generative AI</li>
                <li>Intro to Html and CSS</li>
                <li>Entrepreneurship</li>
                <li>AWS Cloud Foundations Badge</li>
            </ul>
            
            <h1>Achievements</h1>
            <ul className="certAchList">
                <li>Programme Representative of IT</li>
                <li>LOR from Skolar for Full Stack Web dev</li>
                <li>Merit Scholarship at VIT</li>
            </ul>
        </div>
    );
}

export default Experience;