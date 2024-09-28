import React, { useState } from "react";
import "./MyWork.css";

import mywork_data from "../../assets/mywork_data"; // Ensure this file exists and is correctly structured
import arrow_icon from "../../assets/arrow_icon.svg";
import mylatest from "../../assets/mylatest.png"; // Import your latest image

const MyWork = () => {
  const [modalContent, setModalContent] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  const openModal = (content) => {
    setModalContent(content);
    setModalVisible(true);
  };

  const closeModal = () => {
    setModalVisible(false);
    setModalContent(null);
  };

  return (
    <div id="work" className="mywork">
      <div className="title-box">{/* Removed the title */}</div>
      <div className="latest-image-container">
        <img src={mylatest} alt="My Latest Work" className="latest-image" />
      </div>
      <div className="mywork-container">
        {mywork_data.map((item) => (
          <div key={item.w_no} className="work-item">
            <h2>{item.w_name}</h2>
            {item.w_img && (
              <img
                src={item.w_img}
                alt={item.w_name}
                className="work-image"
                onClick={() =>
                  openModal(
                    <img
                      src={item.w_img}
                      alt={item.w_name}
                      className="modal-content"
                    />
                  )
                }
              />
            )}
            {item.w_video && (
              <video
                controls
                autoPlay
                loop
                muted
                className="work-video"
                onClick={() =>
                  openModal(
                    <video
                      controls
                      autoPlay
                      loop
                      muted
                      className="modal-content"
                    >
                      <source src={item.w_video} type="video/webm" />
                    </video>
                  )
                }
              >
                <source src={item.w_video} type="video/webm" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>
      <div className="mywork-showmore">
        <p>Show More</p>
        <img src={arrow_icon} alt="Show More" />
      </div>

      {/* Modal */}
      {modalVisible && (
        <div className="modal" onClick={closeModal}>
          <span className="close" onClick={closeModal}>
            &times;
          </span>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            {modalContent}
          </div>
        </div>
      )}
    </div>
  );
};

export default MyWork;
