import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Navbar/Home"
import About from "./components/About/About";
import Projects from "./components/Projects/Projects";
import Contact from "./components/Contact/Contact";
import Certification from "./components/Certification/Certification";

const App = ()=>{
  return(
    <div>
      <Navbar/>
      <Home/>
      <About/>
      <Projects/>
      <Certification/>
      <Contact/>
      
    </div>
  )
}

export default App;


