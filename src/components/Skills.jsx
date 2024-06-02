import React from 'react';
import './Skills.css';
import SkillCard from "./SkillCard"

// importing images
import dsa from "../assets/dsa.png"
import java from "../assets/java.png"
import web from "../assets/webdev.png"
import aws from "../assets/aws.png"
import cloud from "../assets/cloud.png"
import comm from "../assets/conversation.png"
import software from "../assets/softwaredevelopment.png"
import entre from "../assets/entrepreneurship.png"
import leader from "../assets/leadership.png"

function Skills() {
    return (
        <div className="skills">
            <h1>Skills</h1>
            
            {/* Creating an effect to show text after hovering on the icon */}
            <ul>
                <SkillCard imgSrc={dsa} text="DSA" />
                <SkillCard imgSrc={java} text="Java" />
                <SkillCard imgSrc={web} text="MERN Stack" />
                <SkillCard imgSrc={aws} text="AWS" />
                <SkillCard imgSrc={cloud} text="Cloud" />
                <SkillCard imgSrc={software} text="Software Development" />
                <SkillCard imgSrc={comm} text="Communication" />
                <SkillCard imgSrc={entre} text="Entrepreneurship" />
                <SkillCard imgSrc={leader} text="Leadership" />
            </ul>
        </div>
    );
}

export default Skills;
