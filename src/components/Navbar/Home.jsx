import React from "react"
import './Home.css'
import Me from '../../assets/Me.jpeg'

const Hero=()=> {
  return(
    <div id="home" className="hero">
     <img src={Me}></img>
      <h1><span>I'm Ruchira Sonar</span></h1>
      <p>I'm learning the MERN stack (MongoDB, Express.js, React, Node.js) to build full-stack web applications. My focus is on handling both frontend and backend efficiently while gaining hands-on experience in modern web development.</p>
      <div className="hero-action">
        <div onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="hero-connect">Connect With Me</div>
        <div className="hero-resume">My Resume</div>
      </div>
    </div>
  );
}

export default Hero;