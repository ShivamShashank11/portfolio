// eslint-disable-next-line no-unused-vars
import React from "react";
import pic from "../../assets/pic.png"; // Import your pic.png image
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-top">
        <div className="footer-top-left">
          {/* Replacing <h2 className="footer-name">Shivam</h2> with the image */}
          <img src={pic} alt="Shivam" className="footer-image" />
          <p>
            I am Shivam Shashank, a frontend developer with expertise in
            building scalable and modern web applications.
          </p>
        </div>
      </div>
      <hr />
      <div className="footer-bottom">
        <p className="footer-bottom-left">
          © 2024 Shivam Shashank. All rights reserved.
        </p>
        <div className="footer-bottom-right">
          <p>Terms of Services</p>
          <p>Privacy Policy</p>
          <p>Connect with me</p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
