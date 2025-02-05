import React, { useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import '../index.css';

// Import images
import v1 from '../assets/images/project/vidhan/v1.png';
import v2 from '../assets/images/project/vidhan/v2.png';
import v3 from '../assets/images/project/vidhan/v3.png';
import v4 from '../assets/images/project/vidhan/v4.png';
import v5 from '../assets/images/project/vidhan/v5.png';

import m1 from '../assets/images/project/maitri/m1.png';
import m2 from '../assets/images/project/maitri/m2.png';
import m3 from '../assets/images/project/maitri/m3.png';
import m4 from '../assets/images/project/maitri/m4.png';
import m5 from '../assets/images/project/maitri/m5.png';

import e1 from '../assets/images/project/erp/e1.png';
import e2 from '../assets/images/project/erp/e2.png';
import e3 from '../assets/images/project/erp/e3.png';
import e4 from '../assets/images/project/erp/e4.png';
import e5 from '../assets/images/project/erp/e5.png';

import os1 from '../assets/images/project/open-space/os1.png';
import os2 from '../assets/images/project/open-space/os2.png';
import os3 from '../assets/images/project/open-space/os3.png';
import os4 from '../assets/images/project/open-space/os4.png';
import os5 from '../assets/images/project/open-space/os5.png';

const Projects = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [autoPlay, setAutoPlay] = useState(true);

  const projects = [
    {
      images: [v1, v2, v3, v4, v5],
      title: 'Vidhan: The Crypto Predictor',
      description:
        'This “Crypto Forecasting” project leverages HTML, CSS, TypeScript, tsx, React, MongoDB, and Python to deliver a user-centric platform for cryptocurrency enthusiasts and investors. Designed as a hands-on mini-project, it provides a robust foundation for honing programming skills while delving into financial and data analysis domains.The website empowers users to explore cryptocurrency trends through intuitive visualization and forecasting tools. By integrating advanced machine learning techniques such as Linear Regression and Regression Analysis, it predicts price movements with a focus on accuracy and usability. The platform also taps into the dynamic realm of decentralized finance by supporting wallet integrations and enabling secure, tax-free conversions of cryptocurrencies into USD.With a seamless user interface and backend powered by React, MongoDB, and Python, this project provides an immersive environment for understanding market dynamics, cryptocurrency forecasting, and practical blockchain applications.',
    },
    {
      images: [m1, m2, m3, m4, m5],
      title: 'Maitri Website',
      description:
        'Maitri is an innovative mental wellness ecosystem designed to help students stay motivated, focused, and emotionally balanced. As part of this larger ecosystem, the Maitri Website serves as a central hub for user registration, mental wellness education, and emergency support. This website, alongside the Maitri mobile app and chatbot, offers students a robust, multifaceted approach to managing their mental health. The platform aims to empower students by providing tools and resources that address both emotional and psychological well-being.As the Frontend Developer, I played a pivotal role in developing the Maitri Website, focusing on building features that enhance the student experience and foster better mental wellness practices. I was responsible for developing the user interface, ensuring a responsive design, and integrating various wellness resources and tools.',
    },
    {
      images: [e1, e2, e3, e4, e5],
      title: 'College ERP',
      description:
        'The College ERP (Enterprise Resource Planning) System is a comprehensive solution designed to streamline and manage various administrative tasks within a college. The system facilitates efficient management of student data, faculty information, course schedules, attendance tracking, grades, and more. The platform provides an intuitive user interface for both students and faculty, allowing them to access and update their information in real-time, significantly improving the overall management of college operations.As a Backend Developer, I was responsible for managing the database design, backend architecture, and API development for the ERP system. I worked closely with the front-end development team to ensure smooth integration between the backend and the user interface.',
    },
    {
      images: [os1, os2, os3, os4, os5],
      title: 'Open Space Website',
      description:
        'OPEN-SOURCE is a web platform that allows users to explore space-related data through seamless access to space-based APIs. It provides information on celestial bodies, space missions, astronomical phenomena, and more, offering an engaging educational experience for users interested in space. The website allows users to explore real-time data on planetary positions, satellite imagery, meteor showers, and space mission updates. It integrates various APIs to provide up-to-date space-related information. The user-friendly interface ensures easy navigation, making space exploration accessible to all levels of interest. Developed with HTML, CSS, JavaScript, and Bootstrap, the website is responsive and optimized for different devices. The design ensures fast and efficient access to large amounts of space data while maintaining an interactive and visually appealing layout.',
    },
  ];

  const handleOuterCarouselChange = (previousSlide, { currentSlide }) => {
    setActiveIndex(currentSlide);
  };

  const handleMouseEnter = () => {
    setAutoPlay(false); // Stop autoplay on hover
  };

  const handleMouseLeave = () => {
    setAutoPlay(true); // Resume autoplay when mouse leaves
  };

  return (
    <div id="projects">
      <div className="projects-container">
        <h1>
          <span>My</span> Projects
        </h1>
        <Carousel
          responsive={{
            desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
          }}
          infinite={true}
          autoPlay={autoPlay}
          autoPlaySpeed={5000}
          showDots={true}
          beforeChange={handleOuterCarouselChange}
          arrows={false} // Remove arrows
        >
          {projects.map((project, index) => (
            <div
              key={index}
              className={`project-box ${activeIndex === index ? 'active' : ''}`}
              onMouseEnter={handleMouseEnter} // Stop autoplay when mouse enters
              onMouseLeave={handleMouseLeave} // Resume autoplay when mouse leaves
            >
              <h2 className="project-title">{project.title}</h2>
              <div className="project-content">
                <Carousel
                  responsive={{
                    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 1 },
                  }}
                  infinite={true}
                  autoPlay={autoPlay}
                  autoPlaySpeed={1000}
                  showDots={true}
                  arrows={false} // Remove arrows
                >
                  {project.images.map((image, imgIndex) => (
                    <div key={imgIndex} className="carousel-image">
                      <img
                        src={image}
                        alt={`${project.title} Image ${imgIndex + 1}`}
                        className="project-image"
                      />
                    </div>
                  ))}
                </Carousel>
                <div className="project-description">
                  <p>{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Projects;
