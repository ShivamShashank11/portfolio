// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Hero.css";
import profile_1 from "../../assets/profile_1.png";
import AnchorLink from "react-anchor-link-smooth-scroll";

const Hero = () => {
  return (
    <div id="home" className="hero">
      <img src={profile_1} alt="Profile" className="profile-img" />
      <h1 className="gradient-text">
        <span className="text-gray-800">I'm Shivam Shashank,</span>
        <span style={{ color: "lightblue" }}> a frontend </span>
        <span style={{ color: "lightpurple" }}>
          developer based in Patna, India.
        </span>
      </h1>
      <p style={{ color: "#424242" }}>
        "I am a recent graduate with a deep passion for web development and a
        strong foundation in both frontend and backend technologies. I am
        excited to leverage my skills in HTML, CSS, JavaScript, React.js,
        Next.js, Express, MongoDB, and Firebase to build dynamic, responsive,
        and user-friendly web applications. My focus is on creating seamless,
        interactive experiences that adapt to users' needs."
      </p>
      <div className="hero-action flex gap-4 mt-8">
        <AnchorLink className="btn" offset={50} href="#contact">
          Connect with me
        </AnchorLink>
        <a
          href="/cv11.pdf"
          className="btn"
          target="_blank"
          rel="noopener noreferrer"
        >
          Resume
        </a>
      </div>

      {/* Social Media Cards Section */}
      <div className="social-cards flex gap-4 mt-8">
        <div className="card">
          <a href="#" className="socialContainer containerOne">
            <svg className="socialSvg instagramSvg" viewBox="0 0 16 16">
              <path d="M8 0C3.581 0 0 3.582 0 8.001c0 3.535 2.291 6.507 5.438 7.567.397.073.545-.173.545-.384v-1.356c-2.21.482-2.672-1.037-2.672-1.037-.379-.964-.924-1.222-.924-1.222-.755-.516.057-.505.057-.505.837.058 1.275.86 1.275.86.743 1.274 1.949.905 2.423.69.076-.538.291-.905.531-1.114-1.879-.213-3.845-.936-3.845-4.167 0-.92.328-1.674.868-2.267-.087-.213-.377-1.076.082-2.244 0 0 .707-.226 2.317.86a8.036 8.036 0 0 1 2.108-.282c.724.007 1.451.098 2.106.282 1.608-1.086 2.316-.86 2.316-.86.461 1.168.17 2.031.084 2.244.54.593.868 1.347.868 2.267 0 3.236-1.97 3.953-3.848 4.162.299.26.568.77.568 1.553v2.309c0 .211.146.459.553.384C13.709 14.507 16 11.535 16 8.001 16 3.582 12.418 0 8 0z"></path>
            </svg>
          </a>
        </div>
        <div className="card">
          <a href="#" className="socialContainer containerTwo">
            <svg className="socialSvg githubSvg" viewBox="0 0 16 16">
              <path d="M8 0C3.581 0 0 3.582 0 8.001c0 3.535 2.291 6.507 5.438 7.567.397.073.545-.173.545-.384v-1.356c-2.21.482-2.672-1.037-2.672-1.037-.379-.964-.924-1.222-.924-1.222-.755-.516.057-.505.057-.505.837.058 1.275.86 1.275.86.743 1.274 1.949.905 2.423.69.076-.538.291-.905.531-1.114-1.879-.213-3.845-.936-3.845-4.167 0-.92.328-1.674.868-2.267-.087-.213-.377-1.076.082-2.244 0 0 .707-.226 2.317.86a8.036 8.036 0 0 1 2.108-.282c.724.007 1.451.098 2.106.282 1.608-1.086 2.316-.86 2.316-.86.461 1.168.17 2.031.084 2.244.54.593.868 1.347.868 2.267 0 3.236-1.97 3.953-3.848 4.162.299.26.568.77.568 1.553v2.309c0 .211.146.459.553.384C13.709 14.507 16 11.535 16 8.001 16 3.582 12.418 0 8 0z"></path>
            </svg>
          </a>
        </div>
        <div className="card">
          <a href="#" className="socialContainer containerThree">
            <svg className="socialSvg linkedinSvg" viewBox="0 0 16 16">
              <path d="M14 0H2C.897 0 0 .897 0 2v12c0 1.104.897 2 2 2h12c1.103 0 2-.896 2-2V2c0-1.103-.897-2-2-2zM4.437 13H2.702V6.924h1.735V13zM3.569 5.635a.995.995 0 1 1 .001-1.991.995.995 0 0 1-.001 1.991zm11.173 7.023c0 1.058-.055 1.79-.142 2.126-.081.277-.237.525-.464.701-.223.178-.511.283-.865.283-.592 0-1.019-.229-1.254-.681-.225-.443-.308-1.176-.308-2.31V7.851h-1.736c.023.501.017 1.092.017 1.759v1.926c0 2.188-.184 3.653-.556 4.423-.371.758-1.099 1.137-2.121 1.137-.52 0-1.003-.059-1.437-.189a2.293 2.293 0 0 1-1.448-1.418c-.334-.756-.496-1.661-.496-2.721V7.851h-1.735v4.322h1.735v-2.159h.059c.785-.95 1.745-1.425 2.784-1.425.729 0 1.308.093 1.742.284.431.193.74.544.868.953.127.415.186.9.186 1.433z"></path>
            </svg>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
