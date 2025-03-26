import React from "react";
import "./Certification.css"; // Import the CSS file
import Java from '../../assets/Java.png'
import Internship from '../../assets/Internship.png'

const certifications = [
  {
    id: 1,
    title: "Bootcamp on Java App Development",
    organization: "TechGits by Datta Meghe College of Engineering",
    image: Java,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7308328643951276032/",
  },

  {
    id: 2,
    title: " Android Developer Virtual Internship ",
    organization: "Google for Developers",
    image:Internship,
    link: "https://www.linkedin.com/feed/update/urn:li:activity:7308326440104542208/",
  },
];

const Certification = () => {
  return (
    <section id="certifications">
      <h2 className="cert-title">My Certifications</h2>

      <div className="cert-container">
        {certifications.map((cert) => (
          <div className="cert-card" key={cert.id}>
            <img src={cert.image} alt={cert.title} className="cert-image" />
            <h3 className="cert-name">{cert.title}</h3>
            <p className="cert-organization">{cert.organization}</p>
            <a href={cert.link} className="cert-link" target="_blank" rel="noopener noreferrer">
              View Certificate
            </a>
          </div>
        ))}
      </div>

      {/* LinkedIn Profile Section */}
      <div className="linkedin-section">
        <h3>Connect with me on LinkedIn</h3>
        <a
          href="https://www.linkedin.com/in/ruchira-rs-6a1807343/"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-button"
        >
          Visit My LinkedIn
        </a>
      </div>
    </section>
  );
};

export default Certification;
