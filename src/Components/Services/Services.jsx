// eslint-disable-next-line no-unused-vars
import React, { useState } from "react";
import "./Services.css";
import Services_Data from "../../assets/services_data";
import arrow_icon from "../../assets/arrow_icon.svg";
import myworkImage from "../../assets/mywork.png"; // Import your image

const Services = () => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const handleReadMore = (index) => {
    if (expandedIndex === index) {
      setExpandedIndex(null);
    } else {
      setExpandedIndex(index);
    }
  };

  return (
    <div id="services" className="services">
      {/* Add the image here */}
      <img src={myworkImage} alt="My Work" className="services-image" />
      <div className="services-container">
        {Services_Data.map((service, index) => {
          const isExpanded = expandedIndex === index;
          return (
            <div key={index} className="services-format">
              <h3>{service.s_no}</h3>
              <h2>{service.s_name}</h2>
              <p>
                {isExpanded
                  ? service.s_desc
                  : `${service.s_desc.substring(0, 100)}...`}
              </p>
              <div
                className="services-readmore"
                onClick={() => handleReadMore(index)}
              >
                <p>{isExpanded ? "Show Less" : "Read More"}</p>
                <img src={arrow_icon} alt="Arrow icon" />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Services;
