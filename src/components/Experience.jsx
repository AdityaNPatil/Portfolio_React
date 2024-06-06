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
            
        </div>
    );
}

export default Experience;