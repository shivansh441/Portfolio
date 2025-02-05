import React from 'react';
import '../index.css'; // Make sure to include any necessary CSS
import { FaDownload } from 'react-icons/fa';

// Import images
import htmlImage from '../assets/images/skills-logos/html.svg';
import cssImage from '../assets/images/skills-logos/css.svg';
import jsImage from '../assets/images/skills-logos/js.svg';
import reactImage from '../assets/images/skills-logos/react.svg';
import mongoImage from '../assets/images/skills-logos/mongo.svg'; // Import MongoDB image
import cImage from '../assets/images/skills-logos/c.svg'; // Import C image
import cppImage from '../assets/images/skills-logos/cpp.svg'; // Import C++ image
import bootstrapImage from '../assets/images/skills-logos/bootstrap.svg'; // Import Bootstrap image
import nodeImage from '../assets/images/skills-logos/node.svg'; // Import Node.js image
import pythonImage from '../assets/images/skills-logos/python.svg'; // Import Python image
import gitImage from '../assets/images/skills-logos/guthub.svg'; // Import Python image
import sqlImage from '../assets/images/skills-logos/sql.svg'; // Import Python image

const Skills = () => {
  const skills = [
    { name: "HTML", image: htmlImage },
    { name: "CSS", image: cssImage },
    { name: "JavaScript", image: jsImage },
    { name: "React.js", image: reactImage },
    { name: "MongoDB", image: mongoImage }, // Added MongoDB
    { name: "C", image: cImage }, // Added C
    { name: "C++", image: cppImage }, // Added C++
    { name: "Bootstrap", image: bootstrapImage }, // Added Bootstrap
    { name: "Node.js", image: nodeImage }, // Added Node.js
    { name: "Python", image: pythonImage }, // Added Python
    { name: "Github", image: gitImage }, // Added Python
    { name: "SQL", image: sqlImage }, // Added Python
  ];

  return (
    <div id="skills">
    <div className="skills-section">
      <h2>My Skills</h2>
      <div className="skills-container">
        {skills.map((skill, index) => (
          <div key={index} className="skill">
            <div className="skill-details">
              <img className="skill-image" src={skill.image} alt={skill.name} />
              <span className="skill-name">{skill.name}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
    </div>
  );
};

export default Skills;
