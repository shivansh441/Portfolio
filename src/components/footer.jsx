import React,  { useState }  from "react";
import "../index.css";
import {
  FaFacebook,
  FaTwitter,
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaVoicemail,
  FaWhatsapp,
} from "react-icons/fa";

const Footer = () => {
  const [phoneNumber, setPhoneNumber] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the WhatsApp link to send a message
    const message = `Hi, I want a call from you. My phone number is ${phoneNumber}.`;
    const whatsappLink = `https://wa.me/7081934353?text=${encodeURIComponent(
      message
    )}`;

    // Redirect to WhatsApp with the pre-filled message
    window.open(whatsappLink, "_blank");
  };
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-left">
          <div className="logo">
            <span className="circle"></span>
            <span className="cross"></span>
            <span className="square"></span>
            <h3>Shivansh's Portfolio</h3>
          </div>
          <div className="social-media navbar-social">
            <a
              href="https://www.linkedin.com/in/shivansh-ojha-390417235?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base%3BEVySD1L9SWO09BoQD26Mkw%3D%3D"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://github.com/shivansh441"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://instagram.com/its_avyay_here"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={24} />
            </a>
            <a
              href="https://wa.me/7081934353?text=Hello%20Shivansh,%20I%20would%20like%20to%20discuss%20a%20project."
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={24} />{" "}
            </a>
          </div>
        </div>
        <div className="footer-center">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Project</a>
          <a href="#contact">Contact</a>
        </div>
        <div className="footer-right">
          <p>Want a call from me?</p>
          <form onSubmit={handleSubmit}>
            <input
              type="tel" // 'tel' for phone number input
              placeholder="Enter your Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
              required
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>

      <div className="footer-bottom">
        <p>© Shivansh Ojha portfolio.</p>
      </div>
    </footer>
  );
};

export default Footer;
