import React from "react";
import './Navbar.css'
import logo from '../../assets/react.svg';

const Navbar = ()=>{
  return(
    <div className='Navbar' >
        <img src={logo} alt=""/> 
        <ul className="nav-menu">
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Me</a></li>
            <li><a href="#skill">Skills</a></li>
            <li><a href="#projects">Projects</a></li>
            <li><a href="#certifications">Certifications</a></li>
        </ul>
     <div onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })} className="nav-connect">Connect With Me</div>
    </div>
  )
}

export default Navbar;

