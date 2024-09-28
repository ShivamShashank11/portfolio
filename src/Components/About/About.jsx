// eslint-disable-next-line no-unused-vars
import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";
import about_me from "../../assets/about1.png"; // About image

// Imported skill icons
import javaIcon from "../../assets/java.png";
import htmlIcon from "../../assets/html.png";
import cssIcon from "../../assets/css.png";
import javascriptIcon from "../../assets/javascript.png";
import nodejsIcon from "../../assets/nodejs.png";
import expressjsIcon from "../../assets/expressjs.png";
import mongodbIcon from "../../assets/mongodb.png";
import firebaseIcon from "../../assets/firebase.png";
import postgresqlIcon from "../../assets/postgresql.png";
import tailwindIcon from "../../assets/tailwind.png";
import reactIcon from "../../assets/react.png"; // Import React icon

// Skill data organized into sections
const programmingLanguages = [
  { name: "Java", percentage: 80, icon: javaIcon },
  { name: "HTML", percentage: 90, icon: htmlIcon },
  { name: "CSS", percentage: 80, icon: cssIcon },
  { name: "JavaScript", percentage: 90, icon: javascriptIcon },
];

const frameworks = [
  { name: "React", percentage: 75, icon: reactIcon },
  { name: "Node.js", percentage: 80, icon: nodejsIcon },
  { name: "Express.js", percentage: 50, icon: expressjsIcon },
  { name: "Tailwind CSS", percentage: 70, icon: tailwindIcon },
];

const databases = [
  { name: "MongoDB", percentage: 70, icon: mongodbIcon },
  { name: "Firebase", percentage: 70, icon: firebaseIcon },
  { name: "PostgreSQL", percentage: 70, icon: postgresqlIcon },
];

const About = () => {
  const renderSkills = (skills) => (
    <div className="skills-grid grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 w-full max-w-6xl mx-auto">
      {skills.map((skill, index) => (
        <div key={index} className="skill-item flex flex-col items-center">
          <div className="w-20 h-20 md:w-24 md:h-24 mb-3 relative">
            <CircularProgressbar
              value={skill.percentage}
              styles={buildStyles({
                pathColor:
                  skill.name === "Tailwind CSS"
                    ? "#0ea5e9"
                    : skill.name === "Firebase"
                    ? "#FFA500"
                    : skill.name === "JavaScript"
                    ? "#F0DB4F"
                    : skill.name === "MongoDB" || skill.name === "Node.js"
                    ? "#4DB33D"
                    : skill.name === "HTML"
                    ? "#E34F26"
                    : "url(#gradient)",
                trailColor: "#ddd",
                strokeLinecap: "round",
                textColor: "#800080", // Default purple text for other skills
                textSize: "14px",
              })}
            />
            <img
              src={skill.icon}
              alt={skill.name}
              className="absolute inset-0 w-10 h-10 md:w-14 md:h-14 mx-auto my-auto"
              style={{ top: "50%", transform: "translateY(-50%)" }}
            />
          </div>
          <div className={`skill-percentage font-semibold mb-1 text-gray-600`}>
            {skill.percentage}%
          </div>
          <div className="skill-info text-center">
            <h3 className="text-lg font-semibold text-gray-800">
              {skill.name}
            </h3>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <div id="about" className="about text-black p-8 relative bg-transparent">
      <div className="profile-container mb-8 flex justify-center">
        <img
          src={about_me}
          alt="About Me"
          className="about-img rounded-lg shadow-lg max-w-full h-auto"
        />
      </div>
      <div className="about-sections flex flex-col items-center space-y-8">
        <div className="about-para text-center max-w-3xl mx-auto">
          <p className="mb-4 text-gray-700 text-xl">
            I am a passionate Frontend Developer...
          </p>
          <p className="text-gray-700 text-xl">
            My enthusiasm for frontend development drives me...
          </p>
        </div>
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Programming Languages
        </h2>
        {renderSkills(programmingLanguages)}
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Frameworks
        </h2>
        {renderSkills(frameworks)}
        <h2 className="text-2xl font-bold mb-4 text-center text-gray-800">
          Databases
        </h2>
        {renderSkills(databases)}
      </div>
      <svg width="0" height="0">
        <defs>
          <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop
              offset="0%"
              style={{ stopColor: "#2d99c4", stopOpacity: 1 }}
            />
            <stop
              offset="100%"
              style={{ stopColor: "#B415FF", stopOpacity: 1 }}
            />
          </linearGradient>
        </defs>
      </svg>
    </div>
  );
};

export default About;
