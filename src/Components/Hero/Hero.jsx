import React from "react";
import "./Hero.css";
import profile_1 from "../../assets/profile_1.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_1} alt="Profile" className="profile-img" />
      <h1
        className="gradient-text"
        style={{
          background: "linear-gradient(to right, #6b21a8, #6b21a8)",
          WebkitBackgroundClip: "text",
          WebkitTextFillColor: "transparent",
        }}
      >
        I'm Shivam Shashank,{" "}
        <span
          style={{
            background: "linear-gradient(to right, #6b21a8, #6b21a8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          a full stack
        </span>{" "}
        <span
          style={{
            background: "linear-gradient(to right, #6b21a8, #6b21a8)",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
            display: "inline-block",
          }}
        >
          developer based in Patna, India.
        </span>
      </h1>

      <p style={{ color: "#424242", marginTop: "1rem" }}>
        I am a recent graduate with a deep passion for web development and a
        strong foundation in both frontend and backend technologies. I am
        excited to leverage my skills in HTML, CSS, JavaScript, React.js,
        Next.js, Express, MongoDB, and Firebase to build dynamic, responsive,
        and user-friendly web applications. My focus is on creating seamless,
        interactive experiences that adapt to users' needs.
      </p>

      <div className="hero-action flex gap-4 mt-8">
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
