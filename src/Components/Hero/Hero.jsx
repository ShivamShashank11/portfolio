import React from "react";
import "./Hero.css";
import profile_1 from "../../assets/profile_1.png";
import sun from "../../assets/sun.png";
import earth from "../../assets/earth.png";
import mars from "../../assets/mars.png";
import icon1 from "../../assets/icon1.png";
import icon2 from "../../assets/icon2.png";
import icon3 from "../../assets/icon3.png";
import icon4 from "../../assets/icon4.png";
import icon5 from "../../assets/icon5.png";
import icon6 from "../../assets/icon6.png";
import icon7 from "../../assets/icon7.png";
import icon8 from "../../assets/icon8.png";
import icon9 from "../../assets/icon9.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Star = () => {
  const size = Math.random() * 2 + 1;
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const animationDuration = Math.random() * 2 + 1;
  const animationDelay = Math.random() * 2;

  const style = {
    width: `${size}px`,
    height: `${size}px`,
    borderRadius: "50%",
    backgroundColor: "white",
    position: "absolute",
    left: `${x}%`,
    top: `${y}%`,
    opacity: 0,
    animation: `twinkle ${animationDuration}s infinite alternate ${animationDelay}s`,
  };

  return <div className="star" style={style}></div>;
};

const StarryBackground = ({ count }) => {
  return (
    <div className="starry-background">
      {Array.from({ length: count }, (_, index) => (
        <Star key={index} />
      ))}
    </div>
  );
};

const Hero = () => {
  return (
    <div id="home" className="hero min-h-screen relative overflow-hidden">
      {/* Starry Background */}
      <StarryBackground count={200} />

      {/* Orbiting Background */}
      <div className="orbit-background absolute inset-0 pointer-events-none">
        <img src={sun} alt="Sun" className="planet sun orbit-sun" />
        <img src={earth} alt="Earth" className="planet earth orbit-earth" />
        <img src={mars} alt="Mars" className="planet mars orbit-mars" />

        <div className="orbit-wrapper">
          <img src={icon1} alt="icon1" className="planet planet1" />
          <img src={icon2} alt="icon2" className="planet planet2" />
          <img src={icon3} alt="icon3" className="planet planet3" />
          <img src={icon4} alt="icon4" className="planet planet4" />
          <img src={icon5} alt="icon5" className="planet planet5" />
          <img src={icon6} alt="icon6" className="planet planet6" />
          <img src={icon7} alt="icon7" className="planet planet7" />
          <img src={icon8} alt="icon8" className="planet planet8" />
          <img src={icon9} alt="icon9" className="planet planet9" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 flex flex-col items-center justify-center text-center px-4">
        <img
          src={profile_1}
          alt="Shivam Shashank"
          className="profile-img mb-6"
        />

        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold leading-tight gradient-text mb-4 max-w-3xl">
          I'm Shivam Shashank,{" "}
          <span className="text-purple-800">a full stack</span>{" "}
          <span className="text-purple-800">
            developer based in Patna, India.
          </span>
        </h1>

        <p className="text-gray-700 text-lg mt-2 max-w-2xl">
          I am a recent graduate with a deep passion for web development and a
          strong foundation in both frontend and backend technologies...
        </p>

        <div className="hero-action flex flex-wrap justify-center gap-4 mt-8">
          <AnchorLink
            className="btn px-6 py-2 bg-purple-700 text-white rounded-lg hover:bg-purple-800 transition"
            offset={50}
            href="#contact"
          >
            Connect with me
          </AnchorLink>
          <a
            href="/shivamcv12.pdf"
            className="btn px-6 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-800 transition"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
