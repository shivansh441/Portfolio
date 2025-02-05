import React, { useEffect } from 'react';
import '../index.css';
import Typed from "typed.js";
import photo3 from '../assets/images/photo3.png'; // Import images
import portfolioHome from '../assets/images/portfolio-home.png';

const Home = () => {
  useEffect(() => {
    const typed = new Typed(".typing-text", {
      strings: ["Frontend development", "Backend development", "Web designing", "Network Engineering", "Cloud development"],
      loop: true,
      typeSpeed: 100,
      backSpeed: 25,
      backDelay: 500,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <div id="home">
      <div className="main-content">
        <div className="content-image">
          <div className="img-1">
            <img className="bg-image" src={photo3} alt="Background" /> {/* Use imported image */}
            <img className="img-2" src={portfolioHome} alt="Designer/Coder" /> {/* Use imported image */}
          </div>
        </div>

        <div className="content-coder">
          <h1>
            Hey There,<br />
            <span className='content-name'>I am Shivansh </span>
            <span>Ojha</span>
          </h1>
          <h2>
            I am into <span className="typing-text"></span>.
          </h2>
          <p>
            I'm a software engineer with a strong foundation in web-based application development, backend engineering, and enterprise software solutions. I specialize in building user-centric applications, optimizing workflows, and leveraging cloud infrastructure for scalable solutions.
          </p>
          <div className="home-button">
            <button onClick={() => window.location.href = "mailto:shivanshojha441@gmail.com"}>Hire me!</button>
            <a className='download-button' href="/cv.pdf" download="Shivansh_Ojha_CV.pdf">Download CV</a> {/* Use public folder for CV */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;