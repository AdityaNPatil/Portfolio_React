import React from 'react';
import ProjectCard from './ProjectCard';
import './Projects.css';

// import images
import project1 from "../assets/FoodWeatherStockProject.png"
import project2 from "../assets/AmazonProject.png"
import project3 from "../assets/GymProject.png"
import project4 from "../assets/RestaurantProject.png"

const projectsData = [
  {
    title: "Food, Weather and Stock API",
    description: "A web application that uses various APIs to show recipes, weather, and stocks.",
    imageSrc: project1, // Update with actual image paths
    link: "https://github.com/AdityaNPatil/Food-Weather-Money_API"
  },
  {
    title: "Amazon Front-end Clone",
    description: "A complete responsive replica of the amazon.com website",
    imageSrc: project2, // Update with actual image paths
    link: "https://adityanpatil.github.io/AmazonClone/"
  },
  {
    title: "Gym Check-in and Email Service",
    description: "A web application that stores data of logged in users in the database and sends them a QR code.",
    imageSrc: project3, // Update with actual image paths
    link: "https://drive.google.com/drive/folders/19kNJGa-jy4q9BxLwrib_5t1Ds15vMCKL?usp=drive_link"
  },
  {
    title: "Restaurant landing page",
    description: "A simple landing page for a restuarant",
    imageSrc: project4, // Update with actual image paths
    link: "https://adityanpatil.github.io/html-fooddemo/"
  }
];

function Projects() {
  return (
    <div className="projects">
      <h1>Projects</h1>
      <div className="projects-grid">
        {projectsData.map((project, index) => (
          <ProjectCard
            key={index}
            title={project.title}
            description={project.description}
            imageSrc={project.imageSrc}
            link={project.link}
          />
        ))}
      </div>
    </div>
  );
}

export default Projects;
