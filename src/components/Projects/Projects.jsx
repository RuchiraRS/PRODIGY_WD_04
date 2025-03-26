import React from "react";
import "./Projects.css";

const projects = [
    {
      title: "Vehicle Rental Management System",
      description: "The Vehicle Rental Management System is a Java-based application designed to manage the rental process of vehicles efficiently.",
      techStack: "Java, MySQL, Swing/JavaFX ",
      link: "#",
    },
    {
      title: "Virtual Bank Management System",
      description: "The Virtual Bank Management System is a Java-based application designed to simulate banking operations, allowing users to manage their accounts digitally.",
      techStack: "Java, MySQL, Swing/JavaFX",
      link: "#",
    },
    {
      title: "ATM Management System",
      description: "Java-based application that simulates an Automated Teller Machine (ATM), allowing users to perform banking transactions",
      techStack: "Java, MySQL, Swing/JavaFX",
      link: "#",
    },
    {
      title: "Portfolio Website",
      description: "A personal portfolio website showcasing my skills and projects.",
      techStack: "React, HTML & CSS",
      link: "#",
    },
  ];


const Projects = () => {
  return (
    <section id="projects" className="projects">
      <h2 className="projects-title"><span>My Projects</span></h2>
      <div className="projects-container">
        {projects.map((project, index) =>  (
           <div className="project-card" key={index}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <p className="tech-stack"><strong>Tech Stack:</strong> {project.techStack}</p>
            <a href={project.link} className="project-link" target="_blank" rel="noopener noreferrer">
              View Project
            </a>
          </div>
))}
      </div>
    </section>
  );
};

export default Projects;
