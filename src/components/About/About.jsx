// import React from "react";
// import './About.css'
// import Me from '../../assets/Me.jpeg'
// const About = () => {
//   return (
//     <div className="about">
//       <div className="about-title">
//         <h1>About Me</h1>
//         <img src="" alt=""/>
//       </div>
//       <div className="about-sections">
//         <div className="about-left">
//             <img src={Me} alt=""/>
//         </div>
//         <div className="about-right">
//            <div className="about-para">
//                   <p>
//                   Hi, I'm Ruchira Sonar, a passionate web developer specializing in the MERN stack. 
//                   I love creating interactive and user-friendly applications. With experience in 
//                   front-end and back-end development, I bring ideas to life through clean and 
//                   efficient code.
//                   </p> 
//            </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default About;

import React from "react";
import "./About.css";
import Me from '../../assets/Me.jpeg'

const About = () => {
  return (
    <div id="about">
       <section className="about">
      <div className="about-container">
        <img
          src={Me}
          alt="Profile"
          className="about-image"
        />
        <div className="about-content">
          <h1><span>About Me</span></h1>
          <p>
            Hi, I'm Ruchira Sonar, a passionate web developer specializing in the MERN stack. 
            I love creating interactive and user-friendly applications. With experience in 
            front-end and back-end development, I bring ideas to life through clean and 
            efficient code.
          </p>
          <button className="about-btn">Download Resume</button>
        </div>
      </div>

    </section>

    <div id="skill" className="skills">
    
    <div className="about-skills">
    <h1>Technical Skills</h1>
      <div className="about-skill"><p>HTML & CSS</p><hr style={{width:"60%"}}/></div>
      <div className="about-skill"><p>JavaScript</p><hr style={{width:"50%"}}/></div>
      <div className="about-skill"><p>JAVA</p><hr style={{width:"60%"}}/></div>
      <div className="about-skill"><p>React</p><hr style={{width:"50%"}}/></div>
      </div>

      <div className="about-achievements">
      <div className="about-achievement">
        <h1> Student</h1>
        <p>of IT Department</p>
      </div>

      <hr/>

      <div className="about-achievement">
        <h1>4+</h1>
        <p>Projects Completed</p>
      </div>

      <hr/>

      <div className="about-achievement">
        <h1>2+</h1>
        <p>Certifications Completed</p>
      </div>

      </div>

    </div>

    </div>
   
  );
};

export default About;
