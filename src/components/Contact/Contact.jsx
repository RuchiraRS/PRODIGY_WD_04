// // import React from "react";
// // import './Contact.css'
// // import { useRef, useState } from "react";
// // import emailjs from "@emailjs/browser";

  
// //   const [name, setName] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [doubt, setDoubt] = useState("");
// //   const [msg, setMsg] = useState("");

// //   function handleSubmit(event)
// //   {
// //     event.preventDefault();
// //     let data={name,email,doubt};
    
// //     emailjs.send("service_123456", "template_123456",data,"CMsWd3HzSJiKHXHQp")
// //     .then(()=>{
// //         setName("");
// //         setEmail("");
// //         setDoubt("");
// //         setMsg("Successfully Sent!");

// //         setTimeout(()=>{setMsg("")},3000);
// //     })
// //     .catch((e)=>console.log(e));
// //   }

// // const Contact = () => {
// //   return (
// //     <section id="contact" className="contact-section">
// //       <h2 className="contact-title">
// //         <span>Get in Touch</span>
// //       </h2>

// //       <div className="contact-container">
// //         {/* Left Side - Contact Info */}
// //         <div className="contact-info">
// //           <h3><span>Let's Talk</span></h3>
// //           <p>
// //           I love solving complex problems and bringing creative ideas to life through clean and efficient code. If you’re looking for a dedicated developer who is ready to take on new challenges, feel free to reach out. 
// //           </p>
// //           <p>📧 ruchirars05@gmail.com</p>
// //           <p>📞 +91 8850240179</p>
// //           <p>📍 Mumbai, India</p>
// //         </div>

// //         {/* Right Side - Contact Form */}
// //         <form onSubmit={handleSubmit} className="contact-form">
// //           <label htmlFor="">Your Name</label>
// //           <input type="text" placeholder="Enter your name" 
// //           onChange={(event)=>{setName(event.target.value)}}
// //           value={name}
// //           className="input-field" />

// //           <label  htmlFor="">Your Email</label>
// //           <input 
// //           type="email" 
// //           placeholder="Enter your email" 
// //           onChange={(event)=>{setEmail(event.target.value)}}
// //           value={email}
// //           className="input-field"/>

// //           <label  htmlFor="">Write your message here</label>
// //           <textarea 
// //           className="textarea-field"
// //            rows="8" 
// //            placeholder="Enter your message"
// //            onChange={(event)=>{setDoubt(event.target.value)}}
// //           value={doubt}>
// //           </textarea>

// //           <button type="submit">Send Message</button>
// //         </form>
// //         <h2 className="msg">{msg}</h2>
// //       </div>
// //     </section>
// //   );
// // };


// // export default Contact;


// import React, { useState, useRef } from "react";
// import emailjs from "@emailjs/browser";
// import './Contact.css';

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [doubt, setDoubt] = useState("");
//   const [msg, setMsg] = useState("");
//   const form = useRef(null); // Using ref for form submission

//   function handleSubmit(event) {
//     event.preventDefault();

//     emailjs
//       .sendForm("service_121314", "template_121314", form.current, "CMsWd3HzSJiKHXHQp")
//       .then(() => {
//         setName("");
//         setEmail("");
//         setDoubt("");
//         setMsg("Successfully Sent!");

//         setTimeout(() => {
//           setMsg("");
//         }, 3000);
//       })
//       .catch((e) => console.log(e));
//   }

//   return (
//     <section id="contact" className="contact-section">
//       <h2 className="contact-title">
//         <span>Get in Touch</span>
//       </h2>

//       <div className="contact-container">
//         {/* Left Side - Contact Info */}
//         <div className="contact-info">
//           <h3><span>Let's Talk</span></h3>
//           <p>
//             I love solving complex problems and bringing creative ideas to life through clean and efficient code. If you’re looking for a dedicated developer who is ready to take on new challenges, feel free to reach out.
//           </p>
//           <p>📧 ruchirars05@gmail.com</p>
//           <p>📞 +91 8850240179</p>
//           <p>📍 Mumbai, India</p>
//         </div>

//         {/* Right Side - Contact Form */}
//         <form ref={form} onSubmit={handleSubmit} className="contact-form">
//           <label>Your Name</label>
//           <input
//             type="text"
//             placeholder="Enter your name"
//             onChange={(event) => setName(event.target.value)}
//             value={name}
//             className="input-field"
//             required
//           />

//           <label>Your Email</label>
//           <input
//             type="email"
//             placeholder="Enter your email"
//             onChange={(event) => setEmail(event.target.value)}
//             value={email}
//             className="input-field"
//             required
//           />

//           <label>Write your message here</label>
//           <textarea
//             className="textarea-field"
//             rows="8"
//             placeholder="Enter your message"
//             onChange={(event) => setDoubt(event.target.value)}
//             value={doubt}
//             required
//           ></textarea>

//           <button type="submit">Send Message</button>
//         </form>
//         <h2 className="msg">{msg}</h2>
//       </div>
//     </section>
//   );
// };

// export default Contact;

import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import "./Contact.css";

const Contact = () => {
  const [msg, setMsg] = useState("");
  const form = useRef(null); // Using ref for form submission

  function handleSubmit(event) {
    event.preventDefault();

    emailjs
      .sendForm("service_121314", "template_121314", form.current, "CMsWd3HzSJiKHXHQp")
      .then(() => {
        form.current.reset(); // Clear the form fields
        setMsg("Successfully Sent!");

        setTimeout(() => {
          setMsg("");
        }, 3000);
      })
      .catch((e) => console.log(e));
  }

  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-title">
        <span>Get in Touch</span>
      </h2>

      <div className="contact-container">
        {/* Left Side - Contact Info */}
        <div className="contact-info">
          <h3><span>Let's Talk</span></h3>
          <p>
            I love solving complex problems and bringing creative ideas to life through clean and efficient code.
            If you’re looking for a dedicated developer who is ready to take on new challenges, feel free to reach out.
          </p>
          <p>📧 ruchirars05@gmail.com</p>
          <p>📞 +91 8850240179</p>
          <p>📍 Mumbai, India</p>
        </div>

        {/* Right Side - Contact Form */}
        <form ref={form} onSubmit={handleSubmit} className="contact-form">
          <label>Your Name</label>
          <input
            type="text"
            name="name" // ✅ Ensure name attribute matches EmailJS template key
            placeholder="Enter your name"
            className="input-field"
            required
          />

          <label>Your Email</label>
          <input
            type="email"
            name="email" // ✅ Ensure name attribute matches EmailJS template key
            placeholder="Enter your email"
            className="input-field"
            required
          />

          <label>Write your message here</label>
          <textarea
            className="textarea-field"
            name="doubt" // ✅ Ensure name attribute matches EmailJS template key
            rows="8"
            placeholder="Enter your message"
            required
          ></textarea>

          <button type="submit">Send Message</button>
        </form>
        <h2 className="msg">{msg}</h2>
      </div>
    </section>
  );
};

export default Contact;
