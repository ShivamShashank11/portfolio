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
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div
      id="home"
      className="hero min-h-screen relative overflow-hidden"
      style={{ zIndex: 1 }}
    >
      {/* Orbiting Background */}
      <div className="orbit-background">
        {/* Individual orbits for sun, earth, mars */}
        <img src={sun} alt="sun" className="planet sun orbit-sun" />
        <img src={earth} alt="earth" className="planet earth orbit-earth" />
        <img src={mars} alt="mars" className="planet mars orbit-mars" />

        {/* Group orbit for other planets */}
        <div className="orbit-wrapper">
          <img src={icon1} alt="icon1" className="planet planet1" />
          <img src={icon2} alt="icon2" className="planet planet2" />
          <img src={icon3} alt="icon3" className="planet planet3" />
          <img src={icon4} alt="icon4" className="planet planet4" />
          <img src={icon5} alt="icon5" className="planet planet5" />
          <img src={icon6} alt="icon6" className="planet planet6" />
        </div>
      </div>

      {/* Main Content */}
      <img
        src={profile_1}
        alt="Profile"
        className="profile-img"
        style={{ position: "relative", zIndex: 2 }}
      />
      <h1
        className="gradient-text"
        style={{
          background: "linear-gradient(to right, #6b21a8, #6b21a8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
          position: "relative",
          zIndex: 2,
          textAlign: "center",
          maxWidth: "700px",
        }}
      >
        I'm Shivam Shashank,{" "}
        <span
          style={{
            background: "linear-gradient(to right, #6b21a8, #6b21a8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          a full stack
        </span>{" "}
        <span
          style={{
            background: "linear-gradient(to right, #6b21a8, #6b21a8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          developer based in Patna, India.
        </span>
      </h1>

      <p
        style={{
          color: "#424242",
          marginTop: "1rem",
          position: "relative",
          zIndex: 2,
          maxWidth: "600px",
          textAlign: "center",
        }}
      >
        I am a recent graduate with a deep passion for web development and a
        strong foundation in both frontend and backend technologies...
      </p>

      <div
        className="hero-action flex gap-4 mt-8"
        style={{ position: "relative", zIndex: 2 }}
      >
        <AnchorLink className="btn" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
        <a
          href="/shivamcv12.pdf"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>
    </div>
  );
};

export default Hero;
