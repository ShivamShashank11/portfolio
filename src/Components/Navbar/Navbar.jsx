import React, { useState } from "react";
import "./Navbar.css";
import AnchorLink from "react-anchor-link-smooth-scroll";
import menu_open from "../../assets/menu_open.svg";
import icon_1 from "../../assets/icon_1.png";
import { FaLinkedin } from "react-icons/fa";
import logo from "../../assets/pic.png";

const Navbar = () => {
  const [menu, setMenu] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (menuName) => {
    setMenu(menuName);
    if (window.innerWidth <= 768) {
      setIsMenuOpen(false);
    }
  };

  return (
    <div className="navbar">
      <img src={logo} alt="Logo" className="logo" />

      <div className="nav-mob-toggle" onClick={toggleMenu}>
        {isMenuOpen ? (
          <svg
            className="toggle-cross-svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18 6L6 18M6 6L18 18"
              stroke="white"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        ) : (
          <img
            src={menu_open}
            alt="Open Menu"
            className="toggle-hamburger-img"
          />
        )}
      </div>

      <ul className={`nav-menu ${isMenuOpen ? "open" : ""}`}>
        <li>
          <AnchorLink className="anchor-link" href="#home" offset={100}>
            <p onClick={() => handleNavLinkClick("home")}>Home</p>
          </AnchorLink>
          {menu === "home" && (
            <img src={icon_1} alt="home icon" className="menu-icon" />
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#about">
            <p onClick={() => handleNavLinkClick("about")}>About Me</p>
          </AnchorLink>
          {menu === "about" && (
            <img src={icon_1} alt="about icon" className="menu-icon" />
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#services">
            <p onClick={() => handleNavLinkClick("services")}>Services</p>
          </AnchorLink>
          {menu === "services" && (
            <img src={icon_1} alt="services icon" className="menu-icon" />
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#work">
            <p onClick={() => handleNavLinkClick("work")}>Portfolio</p>
          </AnchorLink>
          {menu === "work" && (
            <img src={icon_1} alt="portfolio icon" className="menu-icon" />
          )}
        </li>
        <li>
          <AnchorLink className="anchor-link" offset={50} href="#contact">
            <p onClick={() => handleNavLinkClick("contact")}>Contact</p>
          </AnchorLink>
          {menu === "contact" && (
            <img src={icon_1} alt="contact icon" className="menu-icon" />
          )}
        </li>
        {/* Mobile Social Icons - These need to be positioned correctly by CSS */}
        <div className="nav-mob-social-icons">
          <a
            href="https://linkedin.com/in/shivam-shashank-616957213"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin className="linkedin-svg-mob" />
          </a>
          <a
            href="https://github.com/ShivamShashank11"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
              className="github-svg-mob"
            >
              <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
            </svg>
          </a>
        </div>
      </ul>

      <div className="icons-right">
        <a
          href="https://linkedin.com/in/shivam-shashank-616957213"
          target="_blank"
          rel="noopener noreferrer"
          className="linkedin-icon"
        >
          <FaLinkedin className="linkedin-svg-desktop" />
        </a>

        <a
          href="https://github.com/ShivamShashank11"
          target="_blank"
          rel="noopener noreferrer"
          className="github-icon"
        >
          <svg
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            stroke="currentColor"
            fill="none"
            viewBox="0 0 24 24"
            className="github-svg-desktop"
          >
            <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Navbar;
