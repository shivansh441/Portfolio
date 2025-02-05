import React from 'react';
import '../index.css';
import HomeImage from '../assets/images/pp.jpg';

const About = () => {
  return (
    <div id="about" className="about-page">
      {/* Title Section */}
      <div className="about-title">
        <h1>ABOUT <span>ME</span></h1>
        <p>Passionate about crafting efficient, user-centered applications, I bring expertise in backend development, cloud infrastructure, and seamless user experiences. I thrive on solving complex problems and transforming ideas into impactful digital solutions.</p>
      </div>

      {/* About Section */}
      <div className="about-content">
     

        {/* Text Section */}
        <div className="about-text">
          <h2>A Little About Myself</h2>
          <p>I'm Shivansh Ojha, a dedicated software engineer with a passion for creating impactful, user-centric applications. With experience across web development, backend engineering, and enterprise solutions, I specialize in designing and developing efficient software that streamlines workflows and enhances user experience.</p>

<p>I thrive on solving complex problems and building scalable solutions, utilizing technologies like Java, Python, React.js, and cloud platforms like AWS. My recent work includes developing a college ERP system hosted on AWS, where I focused on backend optimization, as well as building a machine learning-powered attendance system that uses facial recognition to automate group attendance.</p>

<p>Driven by curiosity and a commitment to continuous improvement, I enjoy exploring new technologies and refining my skills. When I'm not coding, you'll find me diving into the latest tech trends, reading, or practicing yoga. I’m excited to bring my technical expertise and creative problem-solving to new challenges.</p>
        </div>
           {/* Image Section */}
           <div className="about-image">
          <img src={HomeImage} alt="Profile" />
        </div>
      </div>
    </div>
  );
};

export default About;